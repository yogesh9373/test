import { View, Text,Alert } from 'react-native'
import React, { useState } from 'react'
import TextInputLabel from '../../../UI/TextInputLabel/TextInputLabel'
import { moderateScale,verticalScale,scale } from 'react-native-size-matters'
import Button from '../../../UI/Button/Button'
import navigationStrings from '../../../constants/navigationStrings'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Register = ({navigation}) => {
  const [name,setName]=useState('')
  const [mobile,setMobile]=useState('')
  const validateData=()=>{
    storeData()
  }
   const storeData = async () => {
    if(name!==null && name.length===0){
alert("Please enter the name")
    }else{
      navigation.navigate(navigationStrings.DASHBOARD)
    }
 
    }
  return (
    <View style={{flex:1,alignItems:'center',marginVertical:verticalScale(100)}}>
      <TextInputLabel
          autoFocus
         value={name}
          label="Name"
          placeholder="Enter name"
          onChangeText={(text) => {
            text=text.replace(/[^a-z\s]+/i, '');
        setName(text);
          }}
          containerStyle={{borderWidth:1,borderColor:'grey',width:'80%',justifyContent:'center',marginBottom:verticalScale(10)}}
        />
        <Button
      //  disabled
        type='Positive'
        label='Proceed'
        onClick={validateData}
        cs={{root:{width:'80%',alignSelf:'center',borderRadius:10,height:verticalScale(50),marginVertical:verticalScale(15)}}}
        ></Button>
    </View>
  )
}

export default Register