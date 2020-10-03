import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './app/homeScreen';
import { WelcomeScreen } from './app/welcomeScreen';

export default function App() {
  
  const MainStack = createStackNavigator();
  const RootStack = createStackNavigator();

  const MainStackScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
      </MainStack.Navigator>
    );
  }
  
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none" initialRouteName="Welcome">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

