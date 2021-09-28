import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './components/First'
import Login from './components/Authentification/Login'
import SignUp from './components/Authentification/SignUp'
import FirstWelcome from './components/Welcome/FirstWelcome';
import SecondWelcome from './components/Welcome/SecondWelcome';
import ThirdWelcome from './components/Welcome/ThirdWelcome';
import ResetPassword from './components/Authentification/ResetPassword';
import OtpSent from './components/Authentification/OtpSent';
import NewPassword from './components/Authentification/NewPassword';
import Tabs from './components/screens/Tabs';
import Desserts from './components/screens/Menu/Desserts'


const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
            headerShown: false
             }}
          name="First"
          component={First}
        />
        <Stack.Screen 
        options={{
            headerShown: false
             }}
          name="FirstWelcome"
          component={FirstWelcome}
        />
        <Stack.Screen 
        options={{
            headerShown: false
             }}
          name="SecondWelcome"
          component={SecondWelcome}
        />
        <Stack.Screen 
        options={{
            headerShown: false
             }}
          name="ThirdWelcome"
          component={ThirdWelcome}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="ResetPassword"
          component={ResetPassword}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="OtpSent"
          component={OtpSent}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="NewPassword"
          component={NewPassword}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="Tabs"
          component={Tabs}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="Desserts"
          component={Desserts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;