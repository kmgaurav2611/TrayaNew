/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import Text from '../text';

import { styles } from './style';

const RadioButtons = (props) => {
  const { buttonColor, buttonUncheckedColor, value, setValue, rows } = props;

  return (
    <RadioButton.Group value={value} onValueChange={(newValue) => setValue(newValue)}>
      {rows.map((item) => (
        <View style={styles.rowsContainer}>
          <RadioButton.Android
            color={buttonColor}
            uncheckedColor={buttonUncheckedColor}
            value={item.value}
          />
          <Text style={styles.radioButtonText}>{item.text}</Text>
        </View>
      ))}
    </RadioButton.Group>
  );
};

RadioButtons.defaultProps = {};

RadioButtons.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  buttonUncheckedColor: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default RadioButtons;
