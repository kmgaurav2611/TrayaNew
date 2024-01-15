/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import {Image as RNImage} from 'react-native';

const Image = props => {
  const {children} = props;

  return <RNImage {...props}>{children}</RNImage>;
};

Image.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Image;
