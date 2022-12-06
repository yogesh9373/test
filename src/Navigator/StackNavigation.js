import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome,Register,OnBoard,Home, Dashboard, Statistics, Wallet} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
const Stack = createNativeStackNavigator();

import React from 'react'
import Profile from '../Screens/Profile/Profile';
import AddExpense from '../Screens/AddExpenses/AddExpense';


const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={navigationStrings.WELCOME} screenOptions={{
         // headerShown: true
        }}>
        <Stack.Screen
            name={navigationStrings.DASHBOARD}
            component={Dashboard}
            options={{ title: 'Dashboard',headerShown:false}} 
          />
          <Stack.Screen
            name={navigationStrings.WELCOME}
            component={Welcome}
            options={{ title: 'Welcome',headerShown:false}} 
          />
            <Stack.Screen
            name={navigationStrings.REGISTER}
            component={Register}
            options={{ title: 'Registration',headerShown:false}} 
          />
           <Stack.Screen
            name={navigationStrings.ONBOARD}
            component={OnBoard}
            options={{ title: 'OnBoard',headerShown:false}} 
          />
               <Stack.Screen
            name={navigationStrings.HOME}
            component={Home}
            options={{ title: 'HOME',headerShown:false}} 
          />
               <Stack.Screen
            name={navigationStrings.STATISTICS}
            component={Statistics}
            options={{ title: 'Statistics',headerShown:false}} 
          />
               <Stack.Screen
            name={navigationStrings.WALLET}
            component={Wallet}
            options={{ title: 'Wallet',headerShown:false}} 
          />
                  <Stack.Screen
            name={navigationStrings.ADD_EXPENSE}
            component={AddExpense}
            options={{ title: 'AddExpense',headerShown:false}} 
          />

                   <Stack.Screen
            name={navigationStrings.PROFILE}
            component={Profile}
            options={{ title: 'Profile',headerShown:false}} 
          />
        </Stack.Navigator>
    );
  
}

export default StackNavigation