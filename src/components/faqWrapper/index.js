import {Animated} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import styles from './styles';
import {colors} from '../../static/colors';
import {FAQCard} from '..';

const FAQWrapper = ({
  backgroundColor,
  text,
  leftIcon,
  isExpandable,
  contents,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const toggleExpand = useCallback(() => {
    setIsExpanded(!isExpanded);

    Animated.timing(animatedHeight, {
      toValue: isExpanded ? 0 : 40,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded, animatedHeight]);

  return (
    <>
      <FAQCard
        backgroundColor={backgroundColor}
        text={text}
        leftIcon={leftIcon}
        toggleExpand={toggleExpand}
        isExpandable={isExpandable}
      />
      {isExpandable &&
        contents?.map((item, index) => (
          <Animated.View style={[styles.content, {height: animatedHeight}]}>
            <FAQCard
              backgroundColor={colors.ALMOST_WHITE}
              text={item.text}
              leftIcon={item.leftIcon}
            />
          </Animated.View>
        ))}
    </>
  );
};

export default FAQWrapper;
