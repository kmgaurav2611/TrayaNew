import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../static/colors';
import {Text} from '../components';
// Higher Order Component (HOC) to add a label to TextInput
export const withLabel = WrappedComponent => {
  const WithLabel = props => {
    const {label, displayErrorMsg, errorMsg, ...otherProps} = props;

    return (
      <View style={styles.container}>
        <Text size={'M'} style={styles.labelText}>
          {label}
        </Text>
        <WrappedComponent {...otherProps} />
        {errorMsg && (
          <Text size={'S'} style={styles.errorText}>
            {errorMsg}
          </Text>
        )}
      </View>
    );
  };

  return WithLabel;
};

const styles = StyleSheet.create({
  container: {marginVertical: 10, width: '100%'},
  labelText: {marginVertical: 10},
  errorText: {color: colors.TEXT_WARNING},
});
