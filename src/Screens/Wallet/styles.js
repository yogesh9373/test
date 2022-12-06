import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { color } from '../../constants/Color';
export const styles={
//top tab button
//Card Container
//btn container
btnContainer:{height:verticalScale(48),flexDirection:'row',width:moderateScale(330),paddingTop:verticalScale(4),alignSelf:'center',justifyContent:'space-around',backgroundColor:'#F4F7F6',borderRadius:48} 
//name textinput 
,
nameContainer:{borderWidth:1,borderRadius:10,borderColor:'#DDDDDD'},
nameInputStyle:{color:color.Green,fontWeight:'500',fontSize:scale(14)},
cardNumberInputStyle:{height:verticalScale(54),borderWidth:1,borderRadius:10,paddingLeft:moderateScale(10),borderColor:'#DDDDDD'},
cardNumberContainer:{width:moderateScale(220)},
cvcInputStyle:{height:verticalScale(54),borderWidth:1,borderRadius:10,paddingLeft:moderateScale(10),borderColor:'#DDDDDD'},
cvcContainer:{width:moderateScale(133)},
//Account Container
accountContainer:{width:'100%',marginVertical:verticalScale(20)},
touchableBtn:{padding:moderateScale(20),marginVertical:verticalScale(10),marginHorizontal:moderateScale(40),borderRadius:20,backgroundColor:'#FAFAFA'}

}