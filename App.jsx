/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import RootNavigator from './src/navigation/rootNavigator';

function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
