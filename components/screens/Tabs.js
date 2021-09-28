import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native'

import { Icon } from 'react-native-elements'
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Offers from './Offers/Offers';
import Profile from './Profile/Profile';
import More from './More/More';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
        screenOptions={{showIcon: true,tabBarActiveTintColor: '#FC6011',tabBarInactiveTintColor:'#B6B7B7E3', pressColor:'#FC6011'}} 
        initialRouteName='Home'
        >
          <Tab.Screen 
            options={{
            headerShown: false,
            
            tabBarIcon: () => (
                <Icon name="grid" type='ionicon' size={25}/>
              )
             }} 
            name="Menu"
            component={Menu} />
            <Tab.Screen 
            options={{
            headerShown: false,
            
            tabBarIcon: () => (
                <Icon name="gift" type='ionicon' size={25}/>
              )
             }} 
            name="Offers"
            component={Offers} />
       <Tab.Screen 
            options={{
            headerShown: false,
            tabBarIcon: ({tintColor}) => (
              <View>
                <Icon name="home" style={{marginTop:3}}  type='ionicon' size={25} color='#FC6011'/>
              </View>
              )
             }} 
            name="Home"
            component={Home} />
            <Tab.Screen 
            options={{
            headerShown: false,
            
            tabBarIcon: () => (
                <Icon name="person" type='ionicon' size={25}/>
              )
             }} 
            name="Profile"
            component={Profile} />
            <Tab.Screen 
            options={{
            headerShown: false,
            
            tabBarIcon: () => (
                <Icon name="menu" type='ionicon' size={25}/>
              )
             }} 
            name="More"
            component={More} />
            
    </Tab.Navigator>
  );
}
export default Tabs;