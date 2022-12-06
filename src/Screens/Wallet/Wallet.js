import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput,KeyboardAvoidingView,Alert } from "react-native";
import React, {useState, useEffect,useRef } from "react";
import ActionSheet from "react-native-actions-sheet";
import Profile from "../Profile/Profile";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Button from "../../UI/Button/Button";
import { color } from "../../constants/Color";
import DebitCard from "./DebitCard";
import TextInputLabel from "../../UI/TextInputLabel/TextInputLabel";
import { styles } from "./styles";
import Typography from "../../UI/Typography/Typography";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "../../UI/Svg/Icon";
import navigationStrings from "../../constants/navigationStrings";
const Wallet = ({navigation}) => {
  const [cardActive, setCardActive] = useState(true);
  const [accountActive, setAccountActive] = useState(false);
  const cardnumber = useRef(null);
  const cvc = useRef();
  const expireDates = useRef(null);

  const [cardDetails, setCardDetails] = useState({
    cardHolderName: "",
    cardNumber: "",
    CVC: "",
    ZIP: "",
    expireDate: "",
  });

  let actionsheet = useRef();
  const hideModal = () => {
     actionsheet?.current.hide();
  };
  const showModal = () => {
    actionsheet?.current?.show();
  };
  const cardScreen = () => {
    setAccountActive(false);
    setCardActive(true);
  };
  const accountScreen = () => {
    setAccountActive(true);
    setCardActive(false);
  };

  const handleCard = (name, value) => {
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };


  const bankOperation = [{
    id: 1,
    name: "Bank Link",
    subDetails: "Connect your bank account to deposit & fund",
    icon:''
  },
  {
    id: 2,
    name: "Microdeposits",
    subDetails: "Connect bank in 5-7 days",
    icon:''
  },
  {
    id: 3,
    name: "Paypal",
    subDetails: "Connect you paypal account",
    icon:''
  }
]

useEffect(()=>{
showModal()
},[])

const submitData=()=>{
  var date = new Date ();
var month = date.getMonth();
var year=date.getFullYear();

let cardYear=cardDetails?.expireDate?.slice(-2)
let cardMonth=cardDetails?.expireDate?.slice(0,2)
let cardData=cardDetails?.expireDate
console.log(cardMonth)
console.log(cardYear)
if(cardDetails.cardHolderName.length==0){
  alert("Please enter name");
  return
}
if(parseInt(cardMonth)>12){
  alert("Please enter a valid expiry month");
return
}
if(parseInt(cardYear)>30 || parseInt(cardYear)<22){
  alert("Please enter a valid expiry year");
  return
}
if (cardDetails?.cardNumber?.length!=16  || isNaN(cardDetails?.cardNumber)){
    alert("Please enter 16 numbers for your credit card");
     return false;
}
storeData()

}


const storeData = async () => {
  try {
    const CardInfo = JSON.stringify(cardDetails)
    console.log("Card Info",CardInfo)
    await AsyncStorage.setItem('@cardInfo',CardInfo)
    alert("Card Added Successfully...")
    hideModal()
    setCardDetails({
      cardHolderName:'',
      cardNumber:'',
      CVC:'',
      expireDate:''
    })
  } catch (e) {
    alert(e)
  }
}

  useEffect(() => {
    showModal();
  }, []);
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
   
      <ActionSheet
        gestureEnabled={true}
        ref={actionsheet}
        cancelButtonIndex={3}
        destructiveButtonIndex={1}
        containerStyle={{
          flex: 0.8,
          width: "100%",
        }}
        headerAlwaysVisible={true}
      >
       <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    style={{flex:1}}>
        <View style={styles.btnContainer}>
          <Button
            type="Negative"
            label="Cards"
            onClick={cardScreen}
            cs={{
              root: {
                backgroundColor: cardActive ? "white" : "#F4F7F6",
                height: verticalScale(40),
                width: moderateScale(155),
                borderRadius: 40,
              },
              labelStyle: {
                color: "#666666",
                fontSize: scale(14),
                fontWeight: "bold",
              },
            }}
          ></Button>
          <Button
            type="Negative"
            label="Accounts"
            onClick={accountScreen}
            cs={{
              root: {
                backgroundColor: accountActive ? "white" : "#F4F7F6",
                height: verticalScale(40),
                width: moderateScale(155),
                borderRadius: 40,
              },
              labelStyle: {
                color: "#666666",
                fontSize: scale(14),
                fontWeight: "bold",
              },
            }}
          ></Button>
        </View>
        <ScrollView>
       { cardActive?(
         <SafeAreaView>
          <View>
            <DebitCard
              cardType="Debit Card"
              cardName="Mono"
              cardNumber={cardDetails.cardNumber}
              cardHolderName={cardDetails.cardHolderName}
              cardExpireDate={cardDetails.expireDate}
            />
          </View>
          <View style={{ margin: moderateScale(10) }}>
            <TextInputLabel
              label="Name"
              placeholder="Enter Name"
              value={cardDetails.cardHolderName}
              autoFocus={true}
              maxLength={40}
              onChangeText={(text) => {
                const txt = text.replace(/[^a-z\s]+/i, '');
                handleCard("cardHolderName", txt);
              }}
              containerStyle={styles.nameContainer}
              inputStyle={styles.nameInputStyle}
            />
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <TextInputLabel
              ref={cardnumber}
              value={cardDetails.cardNumber}
                placeholder="DEBIT CARD NUMBER"
                keyboardType="numeric"
                maxLength={16}
                onChangeText={(text) => {
                  const pattern = /[^0-9]/g;
                  let txt=text.replace(pattern,'')
                  handleCard("cardNumber",txt);
                }}
                inputStyle={styles.cardNumberInputStyle}
                containerStyle={styles.cardNumberContainer}
              />
              <TextInputLabel
              ref={cvc}
              value={cardDetails.CVC}
                placeholder="CVC"
                keyboardType="numeric"
                maxLength={3}
                onChangeText={(text) => {
                  const pattern = /[^0-9]/g;
                  let txt=text.replace(pattern,'')
                  handleCard("CVC", txt);
                }}
                inputStyle={styles.cvcInputStyle}
                containerStyle={styles.cvcContainer}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
            <TextInputLabel
            ref={expireDates}
              placeholder="EXPIRATION MM/YY"
              keyboardType="numeric"
              maxLength={4}
              value={cardDetails.expireDate}
              onChangeText={(text) => {
                  const pattern = /[^0-9]/g;
                  let txt=text.replace(pattern,'')
                handleCard("expireDate", txt);
              }}
              inputStyle={styles.cardNumberInputStyle}
              containerStyle={styles.cardNumberContainer}
            />
             <TextInputLabel
              placeholder="ZIP"
              maxLength={4}
              onChangeText={(text) => {
              //  handleCard("expireDate", text);
              }}
              inputStyle={styles.cvcInputStyle}
                containerStyle={styles.cvcContainer}
            />
            </View>
            <Button type="Positive" label="Proceed" onClick={submitData} cs={{root:{width:"100%",marginTop:verticalScale(5)}}}></Button>
          
           </View>
          </SafeAreaView>
          ):(accountActive?
<SafeAreaView>
<View style={styles.accountContainer}>
{bankOperation.map((el,index)=>{
  return(
    <TouchableOpacity key={index} onClick={()=>{alert(el.subDetails)}} style={styles.touchableBtn}>
    <View>
      <Typography title={el.name} textStyle={{fontSize:scale(18)}}/>
      <Typography title={el.subDetails} textStyle={{fontSize:scale(12)}}></Typography>
      {/* <Icon name={}/> */}
      </View>
    </TouchableOpacity>
  
  )
})}
</View>
</SafeAreaView>
:<></>

)}
        </ScrollView>
        </KeyboardAvoidingView>
      </ActionSheet>
      
    </SafeAreaView>
 
  );
};

export default Wallet;
