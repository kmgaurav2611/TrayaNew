import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './style';
import {CheckoutBar} from '../../components';

const HomeScreen = ({navigation}) => {
  const onProceed = () => {
    navigation.navigate('Checkout');
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={styles.scrollViewContainer}>
        <CheckoutBar onButtonPressed={onProceed} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
