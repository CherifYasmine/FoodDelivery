import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Home from './Home/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
        screenOptions={{showIcon: true }} 
        initialRouteName='Home'
        >
       <Tab.Screen 
            options={{
            headerShown: false,
            tabBarIcon: () => (
                <Icon name="home" size={30} color='#FC6011'/>
              )
             }} 
            name="Home"
            component={Home} />
    </Tab.Navigator>
  );
}
export default Tabs;