import { View, Text } from 'react-native'
import React, { Children } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Icon from '../Svg/Icon'
import { color } from '../../constants/Color'
import { Path } from '../Svg/svgPath'
import Typography from '../Typography/Typography'
const Income_Expense = ({containerStyle,amount,title,titleStyle,icon}) => {
  return (
    <View style={containerStyle}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Icon name={icon}/>
       <Typography title={title} textStyle={[{color:color.Gainsboro,fontSize:scale(16),paddingHorizontal:moderateScale(5)},titleStyle]}></Typography>
    </View>
    <Typography title={amount} textStyle={{color:color.White,fontSize:scale(20),marginVertical:verticalScale(2)}}></Typography>
    {/* <View style={{flexDirection:'row'}}>
    <Icon name={Path.expenses_arrow}/>
       <Typography title='Expenses' textStyle={{color:color.White,fontSize:scale(16),paddingHorizontal:moderateScale(5)}}></Typography>
    </View> */}
    </View>
  )
}

export default Income_Expense