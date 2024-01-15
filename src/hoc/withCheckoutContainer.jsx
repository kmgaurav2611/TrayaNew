import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../static/colors';
import {Button, Text} from '../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Higher Order Component (HOC) to add a label to TextInput
export const withCheckoutContainer = WrappedComponent => {
  const WithCheckoutContainer = props => {
    const {iconName, title, buttonText, onButtonPress, ...otherProps} = props;

    return (
      <View style={styles.container}>
        <View style={styles.topSectionContainer}>
          <View style={styles.topSectionTextContainer}>
            <FontAwesome
              color={colors.PARROT_GREEN}
              name={iconName}
              size={24}
              style={[styles.icon]}
            />
            <Text size={'M'} style={styles.topSectionText}>
              {title}
            </Text>
          </View>
          <View style={styles.topSectionButtonContainer}>
            <Button
              title={buttonText}
              mode="contained-tonal"
              height={30}
              labelStyle={styles.buttonLabelStyle}
              contentStyle={styles.buttonContentStyle}
              onPress={onButtonPress}
            />
          </View>
        </View>

        <WrappedComponent {...otherProps} />
      </View>
    );
  };

  return WithCheckoutContainer;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.LIGHTER_GREY,
    marginVertical: 5,
    borderRadius: 10,
  },
  topSectionContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    minHeight: 50,
  },
  topSectionText: {
    marginHorizontal: 15,
    fontWeight: 500,
  },
  topSectionButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  buttonLabelStyle: {marginVertical: 5, fontSize: 12},
  buttonContentStyle: {alignItems: 'center'},
  topSectionTextContainer: {flexDirection: 'row'},
});
