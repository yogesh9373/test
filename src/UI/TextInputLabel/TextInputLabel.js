import React, { Children } from 'react'
import { View, Text,TextInput,StyleSheet} from 'react-native'
import {moderateScale,moderateVerticalScale,scale} from 'react-native-size-matters' 
import Icon from '../Svg/Icon'
const TextInputLabel = ({
    label,
    value,
    disabled,
    onPress=()=>{},
    placeholder,
    onChangeText=()=>{},
    containerStyle={},
    inputStyle={},
    labelStyle={},
    startIcon,
    success,
    cancel,
    children,
    startIconName,
    startIconStyle,
    endIconName,
    endIcon,
    endIconStyle,
    iconStyle,
    name,
    ...props
}) => {
  return (
    <View style={{...styles.containerStyle,...containerStyle}}>
      <Text style={{...styles.labelStyle,...labelStyle}}>{label}</Text>
      
      <View style={{flexDirection:'row',alignItems:'center',width:"100%"}}>
      {startIcon?
      <View style={startIconStyle}>
      <Icon name={startIconName}></Icon>
      </View>:<></>}
      <TextInput
      name={props}
      onPressIn={onPress}
      value={value}
      placeholder={placeholder}
      style={{...styles.inputStyle,...inputStyle}}
      onChangeText={onChangeText}   
      {...props}
      ></TextInput>
      {endIcon?
      <View style={endIconStyle}>
      <Icon name={endIconName}></Icon>
     {/* <Image source={require("../../../Images/success.png")} style={{width:20,height:20,position:'relative',right:moderateScale(25)}}></Image> */}
     </View>
      :<></>
}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerStyle:{
        width:'100%', 
       // borderWidth:0.5,
     //borderColor:'grey', 
        padding:moderateScale(5)   
    },
    inputStyle:{
        //backgroundColor:'red',
       // alignContent:'center',
        width:'100%',

    },
    labelStyle:{
        fontSize:scale(14),
    }   

})
export default TextInputLabel