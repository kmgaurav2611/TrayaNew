/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import * as React from 'react';
import {TextInput as Input} from 'react-native-paper';

import {colors} from '../../static/colors';

const TextInput = props => {
  const {text, setText, label} = props;

  return (
    <Input
      activeOutlineColor={colors.TEXT_PRIMARY}
      label={label}
      mode="outlined"
      selectionColor={colors.LIGHT_GREY}
      textColor={colors.BLACK}
      value={text}
      {...props}
      onChangeText={input => setText(input)}
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextInput;
