import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../../../UI/Button/Button'
import Typography from '../../../UI/Typography/Typography'
import { moderateScale,verticalScale,scale } from 'react-native-size-matters'
import { onBoardStyles } from './onBoardStyles'
import navigationStrings from '../../../constants/navigationStrings'
import Icon from '../../../UI/Svg/Icon'
import { Path } from '../../../UI/Svg/svgPath'

const OnBoard = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:2,alignSelf:'center',paddingTop:verticalScale(50)}}>
    <Icon name={Path.man}/>
    </View>
    <View style={onBoardStyles.bodyView}>
<Typography title='spend smarter save more' textStyle={{fontSize:scale(36),color:'#438883', textTransform:'capitalize',textAlign:'center'}}></Typography>
    </View>
    <View style={onBoardStyles.bottomView}>
      <Button type='Positive' label='Get Started' onClick={()=>navigation.push(navigationStrings.REGISTER)} cs={onBoardStyles.filledBtn}></Button>
      <View style={{flexDirection:'row',justifyContent:'center',marginVertical:verticalScale(10)}}>
      <Typography title="Already have account? "/>
      <Button type='text' label='Log In'></Button>
      </View>
      </View>
       </SafeAreaView>
  )
}
export default OnBoard