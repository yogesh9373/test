import * as React from 'react';
import {SvgXml} from 'react-native-svg';

const Icon =(props)=> {
  return(
<SvgXml xml={props.name} color={props.color} style={props.iconStyle}  />
  )
  
};
export default Icon
