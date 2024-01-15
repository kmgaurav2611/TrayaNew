/* eslint-disable react/no-unstable-nested-components */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  MobileNumberScreen,
  ProfileScreen,
  InputScreen,
  HomeScreen,
  CheckoutScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Checkout" component={CheckoutScreen} />
  </HomeStack.Navigator>
);

const MyTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      component={HomeStackNavigator}
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
            name="account-settings"
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
    <Stack.Screen component={MobileNumberScreen} name="Login" />
    <Stack.Screen component={InputScreen} name="Register" />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen component={Authentication} name="Authentication" />
    <Stack.Screen component={MyTabs} name="Home" />
  </Stack.Navigator>
);

export default RootNavigator;
