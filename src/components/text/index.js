/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText} from 'react-native';

const Text = props => {
  const {children} = props;

  return <RNText {...props}>{children}</RNText>;
};

Text.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Text;
