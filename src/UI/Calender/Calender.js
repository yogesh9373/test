import { View, Text, Pressable } from 'react-native'
import React, { useEffect,useContext} from 'react'
import TextInputLabel from '../TextInputLabel/TextInputLabel'
import DateTimePicker from '@react-native-community/datetimepicker';
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { color } from '../../constants/Color';
import { Path } from '../Svg/svgPath';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Calender = ({onPress=()=>{},DateSelection=()=>{},openCalender,value,name}) => {
   


    
  


    // React.useEffect(()=>{
    // currentDate()
    // },[])
   
 
    
  return (
   <View>
    {openCalender == true && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            minimumDate={new Date()}
            mode="date"
          //  maximumDate={new Date()}
            is24Hour={true}
            display="default"
            onChange={DateSelection}
          />
        )}
        <Pressable onPress={onPress}>
   <TextInputLabel
   name={name}
     editable={false} label="Date"  
   value={value} labelStyle={{color:color.Black}} inputStyle={{borderWidth:0.5,marginVertical:verticalScale(7),color:color.Black}}
endIconStyle={{position:'relative',right:moderateScale(30)}}
    endIcon={true} endIconName={Path.calender_icon}></TextInputLabel>
   </Pressable>
   </View>
  )
}

export default Calender