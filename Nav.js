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
import MenuItems from './components/screens/Menu/MenuItems'
import FoodItem from './components/screens/Menu/FoodItem'
import PaymentDetails from './components/screens/More/PaymentDetails';
import Notifications from './components/screens/More/Notifications';
import AboutUs from './components/screens/More/AboutUs';
import Inbox from './components/screens/More/Inbox';
import MyOrders from './components/screens/More/MyOrders';
import Checkout from './components/screens/More/Checkout';
import ChangeAddress from './components/screens/More/ChangeAddress';


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
          name="MenuItems"
          component={MenuItems}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="FoodItem"
          component={FoodItem}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="PaymentDetails"
          component={PaymentDetails}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="Notifications"
          component={Notifications}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="AboutUs"
          component={AboutUs}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="Inbox"
          component={Inbox}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="MyOrders"
          component={MyOrders}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="Checkout"
          component={Checkout}
        />
        <Stack.Screen
        options={{
            headerShown: false
             }}
          name="ChangeAddress"
          component={ChangeAddress}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;