import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { color } from '../../constants/Color'
import Typography from '../../UI/Typography/Typography'
import Icon from '../../UI/Svg/Icon'
import { Path } from '../../UI/Svg/svgPath'
import TextInputLabel from '../../UI/TextInputLabel/TextInputLabel'

const DebitCard = (props) => {
    console.log(props.cardHolderName)
  //variable declaration
  var cardNumber;
  var expireDate;

    let num=props.cardNumber.match(/.{1,4}/g);
    if(num!==null){
      cardNumber= num.join(' ');
    }

    //card date format
   let cardDate=props.cardExpireDate.match(/.{1,2}/g)
   if(cardDate!==null){
    expireDate=cardDate.join('/')
   }

  return (
    <View style={{backgroundColor:color.Green, height:verticalScale(211),width:moderateScale(324),alignSelf:'center',borderRadius:25,marginVertical:verticalScale(20)}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:moderateScale(30),marginVertical:verticalScale(15)}}>
    <Typography title={props.cardType} textStyle={{color:color.White,width:moderateScale(60),textAlign:'center'}}/>
    <Typography title={props.cardName} textStyle={{color:color.White}} />
    </View>
    <View style={{marginHorizontal:moderateScale(48),marginVertical:verticalScale(10)}}>
        <Icon name={Path.simLogo}/>
    </View>
    <View style={{flexDirection:'row',marginVertical:verticalScale(7),alignItems:'center',justifyContent:'center'}}>
   
        <Typography title={cardNumber} textStyle={[{fontSize:scale(18),letterSpacing: 4,color:color.White,alignSelf:'center'},props.cardNumberStyle]} ></Typography>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Typography variant='body-3' title={props.cardHolderName} textStyle={{fontSize:scale(14),letterSpacing:2,textTransform:'uppercase',color:color.White,width:moderateScale(150)}}></Typography>
        <Typography variant='body-3' title={expireDate} textStyle={{fontSize:scale(14),letterSpacing:2,textTransform:'uppercase',color:color.White}}></Typography>
    </View>
    </View>
  )
}

export default DebitCard