import { View, Text } from 'react-native'
import React, { Children } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Icon from '../Svg/Icon'
import { color } from '../../constants/Color'
import { Path } from '../Svg/svgPath'
import Typography from '../Typography/Typography'
import Income_Expense from './Income_Expense'

const Card = (props) => {
  return (
    <View style={{backgroundColor:"#2F7E79",padding:moderateScale(20),paddingBottom:0,top:verticalScale(-100),elevation:5,height:verticalScale(201),width:moderateScale(330),borderRadius:25,alignSelf:'center'}}>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',width:'100%'}}>
     <Typography variant='body-2' title='Total Balance' textStyle={{color:color.White,fontSize:scale(16)}}/>
     <Icon name={Path.more}/>
     </View>
     <View style={{marginVertical:verticalScale(5)}}>
        <Typography variant='body-1' title='$250,0000' textStyle={{fontSize:scale(30),color:color.White}} ></Typography>
     </View>
     <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:verticalScale(20)}}>
     <Income_Expense icon={Path.income_arrow} amount="$1,820.00" title="Income" />
     <Income_Expense icon={Path.expenses_arrow} amount="$2,020.00" title="Expenses" />
     </View>

    </View>
  )
}

export default Card