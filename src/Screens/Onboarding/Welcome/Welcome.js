import { View, Text, Button, SafeAreaView } from 'react-native'
import React,{ useEffect, useState } from 'react'
import navigationStrings from '../../../constants/navigationStrings'
import { moderateScale } from 'react-native-size-matters'
import Typography from '../../../UI/Typography/Typography'
import { color } from '../../../constants/Color'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Welcome = ({navigation}) => {
  const [name,setName]=useState()
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cardInfo')
      //return jsonValue != null ? JSON.parse(jsonValue) : null;
      setName(JSON.parse(jsonValue))
      if(jsonValue!=null){
        setTimeout(()=>{
          navigation.navigate(navigationStrings.DASHBOARD)
        },1000)
       
      }else{
        
          navigation.navigate(navigationStrings.ONBOARD)
      }
      console.log(name)
    } catch(e) {
      // error reading value
    }
  }
  useEffect(()=>{
    getData()
if(name){
    navigation.navigate(navigationStrings.DASHBOARD)
}else{
  
}

  }
,[])
  return (
    <SafeAreaView style={{flex:1,backgroundColor:color.PrimaryScreen,alignItems:'center',justifyContent:'center'}}>
  <Typography variant="body-1" textStyle={{fontSize:moderateScale(50),color:'white'}} title="mono"></Typography>
    </SafeAreaView>
  )
}

export default Welcome