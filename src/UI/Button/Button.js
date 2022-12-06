import { View, Text,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import styles from './ButtonStyles'
const Button = ({label='',type='Positive',cs,onClick,...props}) => {
    const labelStyle=[]
    const containerStyle=[]
    if(type==='Positive'){
        containerStyle.push(styles.positiveContainer)
        labelStyle.push(styles.positiveLabel)
    }else if(type==='Negative'){
        containerStyle.push(styles.negativeContainer)
        labelStyle.push(styles.negativeLabel)
    }else{
        containerStyle.push(styles.defaultContainer)
        //labelStyle.push(styles.defaultLabel)
    }
  return (
    <>
{type==='text'?(
<Text style={[styles.textBtnStyle,cs?.textBtnStyle]} onPress={onClick} {...props}>{label}</Text>
):(
  <TouchableOpacity style={[styles.defaultContainer,...containerStyle,cs?.root]} onPress={onClick} {...props}>
  <Text style={[styles.positiveLabelStyle,...labelStyle,cs?.labelStyle]} {...props}>{label}</Text>
</TouchableOpacity>
)
    }

</>
  )
}

export default Button