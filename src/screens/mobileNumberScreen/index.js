import {SafeAreaView, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {Text, Image, TextInput, Button} from '../../components';
import images from '../../assets';
import {colors} from '../../static/colors';
import {strings} from '../../assets';

const {
  MobileNumberScreenStrings: {
    headerTop,
    login,
    mobilePrefix,
    mobileNumberLabel,
    mobileNumberPlaceholder,
    termsAndConditions,
    otpButtonText,
  },
} = strings;
const MoibileNumberScreen = props => {
  const {navigation} = props;
  const [mobileNumber, setMobileNumber] = useState('');

  const validateMobileNumber = () => {
    if (mobileNumber.length !== 10) {
      return false;
    }

    return true;
  };

  const updateMobileNumber = number => {
    setMobileNumber(number);
  };

  const onSendPressed = () => {
    if (validateMobileNumber) {
      navigation.navigate('Register');
    }
  };
  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={styles.scrollViewContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Image source={images.landingHeader} style={styles.landingImage} />
        <View style={styles.container}>
          <Text style={styles.headerText} size={'M'}>
            {headerTop}
          </Text>
          <View style={styles.loginContainer}>
            <View style={styles.horizontalBar} />
            <View style={styles.loginTextContainer}>
              <Text style={styles.loginText} size={'M'}>
                {login}
              </Text>
            </View>
            <View style={styles.horizontalBar} />
          </View>
          <View style={styles.textInputStyles}>
            <Text style={styles.prefixText}>{mobilePrefix}</Text>
            <TextInput
              activeOutlineColor={colors.BLUE}
              label={mobileNumberLabel}
              maxLength={10}
              selectionColor={colors.BLUE}
              setText={updateMobileNumber}
              text={mobileNumber}
              keyboardType="number-pad"
              placeholder={mobileNumberPlaceholder}
              style={styles.inputText}
            />
          </View>

          <Button
            buttonColor={
              validateMobileNumber(mobileNumber)
                ? colors.BLACK
                : colors.LIGHTER_GREY
            }
            mode="contained"
            style={styles.loginButton}
            textColor={colors.WHITE}
            title={otpButtonText}
            onPress={validateMobileNumber(mobileNumber) ? onSendPressed : null}
          />
          <Text size={'XS'} style={styles.termsAndConditionsText}>
            {termsAndConditions}
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MoibileNumberScreen;
