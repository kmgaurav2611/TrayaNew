import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground } from 'react-native';

import styles from './style';

const Image = (props) => {
  const { children, staticImage, style: parentStyle } = props;

  return (
    <ImageBackground
      resizeMode="stretch"
      source={staticImage}
      style={[styles.imageBackground, { ...parentStyle }]}
    >
      {children}
    </ImageBackground>
  );
};

Image.defaultProps = {};

Image.propTypes = {
  children: PropTypes.element.isRequired,
  staticImage: PropTypes.string.isRequired,
  style: PropTypes.element.isRequired
};

export default Image;
