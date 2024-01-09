/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText} from 'react-native';

const Text = props => {
  const {children, size, style} = props;
  const TextSizes = {
    XS: 10,
    S: 12,
    M: 16,
    L: 20,
    XL: 24,
    XXL: 30,
  };

  return (
    <RNText {...props} style={[{fontSize: TextSizes[size]}, style]}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.string,
};

Text.defaultProps = {
  size: 'M',
};

export default Text;
