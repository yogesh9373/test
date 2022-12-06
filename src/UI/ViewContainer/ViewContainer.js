import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale, verticalScale,scale } from 'react-native-size-matters'
import Typography from '../Typography/Typography'
import Icon from '../Svg/Icon'
import { Path } from '../Svg/svgPath'
import { color } from '../../constants/Color'

const ViewContainer = ({props}) => {
  return (
    <View style={{alignItems:'flex-start',height:verticalScale(220),padding:verticalScale(25),flexDirection:'row',justifyContent:'space-between',backgroundColor:'#429690',borderBottomEndRadius:30,borderBottomLeftRadius:30}}>
    <View style={{}}>
    <Typography variant='body-2' title="Good afternoon" textStyle={{fontSize:scale(14),color:color.Gainsboro}}/> 
    <Typography title="Yogesh Patil" textStyle={{fontSize:scale(20),color:color.White}}/>
    </View>
    <Icon name={Path.bell}/>
    </View>
  )
}

export default ViewContainer