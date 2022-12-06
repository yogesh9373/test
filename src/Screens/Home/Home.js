import { View, Text, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import Icon from '../../UI/Svg/Icon'
import { Path } from '../../UI/Svg/svgPath'
import ViewContainer from '../../UI/ViewContainer/ViewContainer'
import { moderateScale, verticalScale,scale } from 'react-native-size-matters'
import Typography from '../../UI/Typography/Typography'
import { color } from '../../constants/Color'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OwnIcon } from '../../UI/OwnLogo/OwnLogo'

const Home = () => {
  const [expenseData,setExpenseData]=useState([])
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@expenseData')
setExpenseData(...expenseData,jsonValue)
  } catch(e) {
    // error reading value
    alert(e)
  }
}
useEffect(()=>{
getData()

},[])

  return (
    <SafeAreaView style={{paddingHorizontal:moderateScale(15),top:verticalScale(-80)}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
         <Typography variant='body-1' title='Transaction History' textStyle={{fontSize:scale(18),color:color.Black}}></Typography>
         <Button label='see all' type='text'  onClick={()=>alert("Add Data")} />
        </View>
        <ScrollView>   
    </ScrollView>
   

    </SafeAreaView>
  )
}

export default Home