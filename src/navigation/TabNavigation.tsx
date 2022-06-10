import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/home/home';
import TabBar from './TabBarComponent';

const Tab = createMaterialTopTabNavigator();

interface MyTabProps {}

const MyTab: React.FC<MyTabProps> = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        lazy: true,
        swipeEnabled: false,
        headerShown: false,
      }}
      tabBarPosition="bottom">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Compass" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  );
};
export default MyTab;
