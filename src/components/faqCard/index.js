import {TouchableOpacity, View, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../static/colors';
import {Text} from '..';

const FAQCard = ({
  backgroundColor,
  text,
  leftIcon,
  toggleExpand,
  isExpandable,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const rotationValue = useRef(new Animated.Value(0)).current;

  const rotateIconDown = () => {
    Animated.timing(rotationValue, {
      toValue: 0, // Rotate 90 degrees
      duration: 300, // Animation duration
      useNativeDriver: true,
    }).start();
  };

  const rotateIconUp = () => {
    Animated.timing(rotationValue, {
      toValue: 90, // Rotate 90 degrees
      duration: 300, // Animation duration
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: backgroundColor,
        },
        styles.container,
      ]}
      onPress={
        isExpandable
          ? isExpanded
            ? () => {
                toggleExpand();
                rotateIconDown();
                // rotateIconUp();
                setIsExpanded(!isExpanded);
              }
            : () => {
                toggleExpand();
                setIsExpanded(!isExpanded);
                rotateIconUp();
              }
          : null
      }>
      <View style={styles.iconContainer}>
        <FontAwesome color={colors.PARROT_GREEN} name={leftIcon} size={24} />
      </View>

      <Text size={'M'} style={styles.faqTitle}>
        {text}
      </Text>
      <Animated.View
        style={[
          styles.rightIcon,
          {
            transform: [
              {
                rotate: rotationValue.interpolate({
                  inputRange: [0, 90],
                  outputRange: ['0deg', '90deg'],
                }),
              },
            ],
          },
        ]}>
        <FontAwesome
          color={colors.DARKER_GREY}
          name={'angle-right'}
          size={16}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default FAQCard;
