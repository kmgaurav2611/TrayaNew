import {View} from 'react-native';
import React from 'react';
import {Button, Text} from '..';
import {colors} from '../../static/colors';
import styles from './style';

const CheckoutBar = ({onButtonPressed}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.leftSectionText}>
          {'Your customised hair kit is ready'}
        </Text>
      </View>

      <Button
        mode="contained"
        title={'Buy now $1699'}
        textColor={colors.DARKER_GREY}
        buttonColor={colors.PARROT_GREEN}
        style={styles.rightSectionText}
        onPress={onButtonPressed}
      />
    </View>
  );
};

export default CheckoutBar;
