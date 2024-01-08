/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import * as React from 'react';
import { Button as RNButton } from 'react-native-paper';

const Button = (props) => {
  const { mode, onPress, title } = props;

  return (
    <RNButton mode={mode} onPress={onPress} {...props}>
      {title}
    </RNButton>
  );
};

Button.propTypes = {
  mode: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Button;
