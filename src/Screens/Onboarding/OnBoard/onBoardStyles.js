import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
export const onBoardStyles = StyleSheet.create({
    //body
    bodyView:{
        flex:0.5,
        justifyContent:'center'
    },
    //bottom 
    bottomView:{
        flex:0.8,
        justifyContent:'center',
        width:'100%',
        // position: 'absolute',
        // bottom: 0,
        marginBottom:verticalScale(10)
    },
  //btn style
  filledBtn: {
    root: {
      width: '90%',
      alignSelf: 'center',
      borderRadius: 50,
      elevation:10,
      marginBottom:verticalScale(5)
    },
    labelStyle: {fontSize: scale(18),fontWeight:'600'},
  },
});
