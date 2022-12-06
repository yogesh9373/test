//import liraries
import React, { useEffect } from "react";
import {Pressable, SafeAreaView, ScrollView, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "../../constants/navigationStrings";
import { color } from "../../constants/Color";
import Icon from "../../UI/Svg/Icon";
import { Path } from "../../UI/Svg/svgPath";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import Wallet from "../Wallet/Wallet";
import Profile from "../Profile/Profile";
import ViewContainer from "../../UI/ViewContainer/ViewContainer";
import { moderateScale, verticalScale } from "react-native-size-matters";
import Card from "../../UI/Card/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

const Dashboard = ({navigation,route}) => {

  return (
  <SafeAreaView style={{flex:1}}>
  
  <TouchableOpacity onPress={()=>{navigation.push(navigationStrings.ADD_EXPENSE)}}  style={{position:'absolute',zIndex:9999,bottom:verticalScale(30),alignSelf:'center',alignItems:"center",justifyContent:'center',elevation:10,width:moderateScale(70),height:verticalScale(65),borderRadius:50,backgroundColor:color.Green}}>
<Icon name={Path.float_btn}></Icon>
</TouchableOpacity>
   {/* <Card/> */}
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false,lazy:true }}
    >
      <Tab.Screen
        name="Home"
        //component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Icon name={Path.home_fill} />
            ) : (
              <Icon name={Path.home} />
            ),
        }}
        children={() => (
          <>
          <ViewContainer name={route?.params?.name}/>
             <Card/>
          <Home/>
          </>
            )}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
      
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Icon name={Path.signal_fill} />
            ) : (
              <Icon name={Path.signal} />
            ),
        }}
      />
      <Tab.Screen
        name="Wallet"
       // component={Wallet}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Icon name={Path.wallet_fill} />
            ) : (
              <Icon name={Path.wallet} />
            ),
        }}

        children={() => (
          <>
           <Wallet/>
          </>
            )}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Icon name={Path.user_fill} />
            ) : (
              <Icon name={Path.user} />
            ),
        }}
      />
    </Tab.Navigator>
    </SafeAreaView>
  );
};
export default Dashboard;
