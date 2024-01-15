import {View, ScrollView, SafeAreaView, Animated} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import {styles} from './style';
import {ButtonWithIcon, FAQWrapper, Text} from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../static/colors';
import {strings} from '../../assets';

const {
  profileScreen: {faqConfig, userName, successStories, helpAndSupport, you},
} = strings;
const ProfileScreen = props => {
  const {navigation} = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const toggleExpand = useCallback(() => {
    setIsExpanded(!isExpanded);

    Animated.timing(animatedHeight, {
      toValue: isExpanded ? 0 : 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded, animatedHeight]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.backButtonContainer}>
          <FontAwesome
            color={colors.DARKER_GREY}
            name={'arrow-left'}
            size={24}
            style={styles.backIcon}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text size={'XL'} style={styles.screenTitle}>
            {you}
          </Text>
        </View>
        <ButtonWithIcon
          type={'user'}
          ageButtonStyles={styles.profileSection}
          title={userName}
          isOpted={false}
          ageIconStyles={styles.profileSectionIcon}
          textStyles={styles.profileSectionText}
        />
        <View style={styles.successHelpContainer}>
          <ButtonWithIcon
            type={'line-chart'}
            ageButtonStyles={styles.successStory}
            title={successStories}
            isOpted={false}
            ageIconStyles={styles.successStoryIcon}
            textStyles={styles.successStoryText}
          />
          <ButtonWithIcon
            type={'envelope-o'}
            ageButtonStyles={styles.helpSupport}
            title={helpAndSupport}
            isOpted={false}
            ageIconStyles={styles.successStoryIcon}
            textStyles={styles.successStoryText}
          />
        </View>

        {faqConfig.map(item => (
          <FAQWrapper
            backgroundColor={colors.WHITE}
            text={item.text}
            leftIcon={item.leftIcon}
            toggleExpand={toggleExpand}
            isExpanded={isExpanded}
            isExpandable={item.isExpandable}
            contents={item?.contents}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
