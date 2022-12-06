import { color } from "../../constants/Color";
import { moderateScale,verticalScale,scale } from 'react-native-size-matters'
const styles={
    defaultContainer:{
        display: "flex",
        height:verticalScale(60),
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start"
    },
    textBtnStyle:{
  color:color.positiveBtnColor,
  fontSize:scale(14)
    },
    positiveContainer:{
        backgroundColor:color.positiveBtnColor,
        height:verticalScale(60),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start"
    },
 negativeContainer:{
        backgroundColor:color.negativeBtnColor,
        height:verticalScale(60),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start"
    },
    positiveLabelStyle:{
color:'white'
    },
    negativeLabel:{

    }

}
export default styles;