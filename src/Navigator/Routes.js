import { View, Text } from 'react-native'
import React from 'react'
import StackNavigation from './StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const Routes = () => {
  return (
    <NavigationContainer>
    <StackNavigation/>
    </NavigationContainer>
        
  )
}

export default Routes