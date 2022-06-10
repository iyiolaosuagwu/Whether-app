import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import SplashScreen from '../screens/splash/splash';
import Login from '../screens/login/login';
import Tabs from './TabNavigation';
import Details from '../screens/details/details';

enableScreens();

const RootStack = createStackNavigator();

function AppNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Details" component={Details} />
      <RootStack.Screen name="Tabs" component={Tabs} />
    </RootStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
