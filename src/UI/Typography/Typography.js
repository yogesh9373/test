import { View, Text } from 'react-native'
import React, { Children } from 'react';
import { getFontStyle } from './typography.util'
const Typography = ({title='',children,variant='body-2',textStyle={}, ...props}) => {
  return (
      <Text style={[getFontStyle(variant),textStyle]} { ...props}>{children||title}</Text>
  )
}

export default Typography