import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Text} from '..';
import {colors} from '../../static/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const ButtonWithIcon = React.memo(
  ({
    type,
    buttonHandler,
    ageButtonStyles,
    title,
    isOpted,
    textStyles,
    ageIconStyles,
  }) => {
    return (
      <TouchableOpacity
        onPress={buttonHandler}
        style={[
          styles.container,
          {
            backgroundColor: isOpted ? colors.DARKER_GREY : colors.WHITE,
          },
          {...ageButtonStyles},
        ]}>
        <FontAwesome
          color={isOpted ? colors.WHITE : colors.GREY}
          name={type}
          size={24}
          style={[styles.ageIcon, {...ageIconStyles}]}
          onPress={buttonHandler}
        />
        <Text
          style={[
            {color: isOpted ? colors.WHITE : colors.GREY},
            {...textStyles},
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

ButtonWithIcon.propTypes = {
  navigation: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func.isRequired,
  ageButtonStyles: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  isOpted: PropTypes.bool.isRequired,
  textStyles: PropTypes.object.isRequired,
  ageIconStyles: PropTypes.object.isRequired,
};

export default ButtonWithIcon;
