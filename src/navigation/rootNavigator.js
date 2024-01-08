/* eslint-disable react/no-unstable-nested-components */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import ConfirmationScreen from '../screens/confirmation';
// import ForgotPasswordScreen from '../screens/forgotPassword';
// import HomeScreen from '../screens/home';
// import LoginScreen from '../screens/login';
// import OnboardingScreen from '../screens/onboarding';
// import RegisterScreen from '../screens/register';
// import SettingsScreen from '../screens/settings';
// import UpdatePasswordScreen from '../screens/updatePassword';

import {OtpScreen, ProfileScreen, InputScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      component={HomeScreen}
      name="Traya"
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons color={color} name="home" size={26} />
        ),
        tabBarLabel: 'Traya',
      }}
    />
    <Tab.Screen
      component={ProfileScreen}
      name="Profile"
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons
            color={color}
            name="table-settings"
            size={26}
          />
        ),
        tabBarLabel: 'Profile',
      }}
    />
  </Tab.Navigator>
);

const Authentication = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen component={OtpScreen} name="Login" />
    <Stack.Screen component={InputScreen} name="Register" />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* <Stack.Screen component={Authentication} name="Authentication" /> */}
    <Stack.Screen component={MyTabs} name="Home" />
  </Stack.Navigator>
);

export default RootNavigator;
