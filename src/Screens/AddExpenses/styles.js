import { color } from '../../constants/Color'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
export const styles={
viewContainer:{backgroundColor:color.White,elevation:1,borderRadius:20,padding:moderateScale(15),position:'absolute',top:verticalScale(130),height:verticalScale(350),alignSelf:'center',width:moderateScale(320)}
,
addInvoiceBtn:{width:'100%',height:verticalScale(50),marginTop:verticalScale(5)}
}