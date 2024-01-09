import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {Text, Image, TextInput, Button} from '../../components';
import images from '../../assets';
import {colors} from '../../static/colors';
import {TextInputAffixProps, TextInputAffix} from 'react-native-paper';

const OtpScreen = props => {
  const {navigation} = props;
  const [mobileNumber, setMobileNumber] = useState('');

  const validateMobileNumber = () => {
    if (mobileNumber.length !== 10) return false;

    return true;
  };

  const updateMobileNumber = number => {
    setMobileNumber(number.replace(/\+91 |\+91/g, ''));
  };

  const onSendPressed = () => {
    if (validateMobileNumber) {
      navigation.navigate('Register');
    }
  };
  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={{
        flex: 1,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <Image
          source={images.landingHeader}
          style={{flex: 1, height: '100%', width: '100%'}}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 15,
          }}>
          <Text style={{fontWeight: '700'}} size={'M'}>
            Hair Loss Solutions Backed by Science.
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View style={{flex: 2}}>
              <Text
                style={{
                  minWidth: 50,
                  textAlign: 'center',
                  fontWeight: 700,
                  color: colors.DARK_GREY,
                }}
                size={'M'}>
                {'Log in or Sign up'}
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          </View>
          <TextInput
            activeOutlineColor={colors.BLUE}
            label="Mobile Number"
            maxLength={14}
            selectionColor={colors.BLUE}
            setText={updateMobileNumber}
            style={styles.textInputStyles}
            text={`+91 ${mobileNumber}`}
            keyboardType="number-pad"
            placeholder={'please input number'}
          />
          <Button
            buttonColor={
              validateMobileNumber(mobileNumber)
                ? colors.BLACK
                : colors.LIGHTER_GREY
            }
            // loading={isLoading || isFetching}
            mode="contained"
            style={styles.loginButton}
            textColor={colors.WHITE}
            title="Get OTP"
            onPress={validateMobileNumber(mobileNumber) ? onSendPressed : null}
          />
          <Text
            size={'XS'}
            style={{
              textAlign: 'center',
              fontWeight: '500',
              color: colors.DARK_GREY,
            }}>
            By proceeding, you consent to share your information with Traya and
            agree to Traya's privacy policy and terms of service.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default OtpScreen;
