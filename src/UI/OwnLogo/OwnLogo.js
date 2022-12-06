import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { View,Text } from "react-native";
export const OwnIcon = props => (
    <View style={{width:moderateScale(50),borderRadius:100,justifyContent:'center',height:verticalScale(50),backgroundColor:'red'}}>
        <Text style={{fontSize:scale(25),textAlign:'center'}}>{props.name}</Text>
    </View>
  );