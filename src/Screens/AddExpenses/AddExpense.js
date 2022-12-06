import { View, Text, SafeAreaView, ScrollView,KeyboardAvoidingView,Alert} from 'react-native'
import React,{useEffect, useState,useContext} from 'react'
import ViewContainer from '../../UI/ViewContainer/ViewContainer'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import TextInputLabel from '../../UI/TextInputLabel/TextInputLabel'
import { SelectList } from 'react-native-dropdown-select-list'
import Typography from '../../UI/Typography/Typography'
import { color } from '../../constants/Color'
import Button from '../../UI/Button/Button'
import Calender from '../../UI/Calender/Calender'
import navigationStrings from '../../constants/navigationStrings'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles'
const AddExpense = ({navigation}) => {
    
    const [startDate,setStartDate]=React.useState('')
    const [openStartDate, setOpenStartDate] = React.useState(false);
    const [allExpenseRecords,setAllExpenseRecord]=useState([])
    const [expenseDetails,setExpenseDetails]=useState({
      name:'',
      amount:'',
      expenseDate:''
    })


    const data = [
        {key:'1', value:'Yogesh Patil'},
        {key:'2', value:'Pravin Kumar'},
        {key:'3', value:'Chandrashekar Sharma'},
        {key:'4', value:'Shital Vyas', disabled:true},
        {key:'5', value:'Vivek Kukrja'},
        {key:'6', value:'Somnath Bhandari'},
        {key:'7', value:'Shushant Varma'},
    ]

//Calender function 
      function currentDate(){
        const dateData = new Date();
        let datavalue = `${dateData.getDate()}/${
          dateData.getMonth() + 1
        }/${dateData.getFullYear()}`;
        setExpenseDetails({expenseDate:datavalue})
    }
    const StartDateOnChange = (e, selecedDate) => {
      setOpenStartDate(false);
      const dateData = new Date(selecedDate);
      let datavalue = `${dateData.getDate()}/${
        dateData.getMonth() + 1
      }/${dateData.getFullYear()}`;
      if (datavalue != 'NaN/NaN/NaN') {
        //setStartDate(datavalue);
        handleData('expenseDate',datavalue)
      }
    };

//...................
const handleData=(name,value)=>{
  setExpenseDetails({
    ...expenseDetails,
    [name]: value,
  });
  
}
var uniqueChars=[]
const addData=()=>{
  storeData()
}


//............

        const storeData = async() => {
        try {
           uniqueChars = [...new Set(allExpenseRecords)];
          await AsyncStorage.setItem('@expenseData',JSON.stringify(uniqueChars))
        alert("Expense Added Successfully")
    setExpenseDetails({
      name:'',
      amount:'',
      expenseDate:''
    })
        } catch (e) {
          // saving error
          alert("Something is wroung")
        }
        }
   
       
        useEffect(()=>{
          currentDate()
        },[])
  return (
 
    <SafeAreaView style={{flex:1}}>
     <ViewContainer/>
     <View style={styles.viewContainer}>
     <KeyboardAvoidingView behavior='padding' enabled   keyboardVerticalOffset={150} style={{flex: 1}}>
     <ScrollView>
   
     <Typography variant='body-3' title='Name' textStyle={{color:color.Black,fontSize:scale(14)}}></Typography>
     <SelectList 
     boxStyles={{borderRadius:0,marginVertical:verticalScale(7)}}
     search={false}
     searchPlaceholder="Select Name"
        setSelected={(val) => handleData('name',val)} 
        data={data} 
        save="value"
    />
   <TextInputLabel label="Amount" placeholder="Amount in rupees" value={expenseDetails.amount}  onChangeText={(el)=>{
    const pattern = /[^0-9]/g;
    let txt=el.replace(pattern,'')
   handleData('amount',txt)}} 
   labelStyle={{color:color.Black}} inputStyle={{borderWidth:0.5,marginVertical:verticalScale(7)}}></TextInputLabel>
   {/* <TextInputLabel label="Date" value="12/12/2022" inputStyle={{borderWidth:1,marginVertical:verticalScale(7)}}></TextInputLabel> */}
   <Calender
   value={expenseDetails.expenseDate}
    openCalender={openStartDate}
  DateSelection={StartDateOnChange}
  onPress={()=>setOpenStartDate(true)}
    />
  <Button cs={{root:styles.addInvoiceBtn}} label='Add Invoice' onClick={addData}></Button>
    </ScrollView>
    </KeyboardAvoidingView>
     </View>
    </SafeAreaView>
 
  )
}

export default AddExpense