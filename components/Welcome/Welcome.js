import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstWelcome from './FirstWelcome';
import SecondWelcome from './SecondWelcome';

const Tab = createBottomTabNavigator();

const Welcome = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="FirstWelcome" component={FirstWelcome} />
        <Tab.Screen name="SecondWelcome" component={SecondWelcome} />
      </Tab.Navigator>
  );
}
export default  Welcome;