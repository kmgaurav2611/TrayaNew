import {View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {ButtonWithIcon, Text, TextInput, Button} from '../../components';
import {colors} from '../../static/colors';
import {withLabel} from '../../hoc';
import {strings} from '../../assets';
const TextInputWithLabel = withLabel(TextInput);
const ViewWithLabel = withLabel(View);

const {InputScreenStrings} = strings;
const {
  inputFields,
  ageButtons,
  genderLabel,
  genderTitle,
  genderErrorMessage,
  header,
  title,
  continueButtonTitle,
} = InputScreenStrings;

const InputScreen = props => {
  const {navigation} = props;
  const [state, setState] = useState({
    name: '',
    age: '',
    gender: '',
  });

  const updateState = (value, stateVar) => {
    setState({...state, [stateVar]: value});
  };

  const onContinuePressed = () => {
    navigation.replace('Home');
  };

  const validateState = (stateVar = null) => {
    if (!stateVar) {
      return state.name !== '' && state.age >= 18 && state.gender !== '';
    }

    switch (stateVar) {
      case 'name':
        return state.name !== '';
      case 'age':
        return state.age >= 18;
      case 'gender':
        return state.gender !== '';
      default:
        break;
    }
  };
  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={styles.scrollViewContainer}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Text style={styles.headerText} size={'XXL'}>
          {header}
        </Text>
        <Text style={styles.titleText} size={'M'}>
          {title}
        </Text>

        {inputFields.map((item, index) => {
          return (
            <TextInputWithLabel
              key={index}
              containerStyles={styles.titleText}
              activeOutlineColor={colors.BLUE}
              label={item.label}
              maxLength={item.maxLength}
              selectionColor={colors.BLUE}
              setText={value => updateState(value, item.title)}
              style={styles.textInputStyles}
              text={state[item.title]}
              keyboardType={item.keyboardType}
              placeholder={item.placeholder}
              returnKeyType={item.returnKeyType}
              errorMsg={validateState(item.title) ? null : item.errorMessage}
            />
          );
        })}
        <ViewWithLabel
          label={genderLabel}
          errorMsg={validateState(genderTitle) ? null : genderErrorMessage}
          style={styles.genderContainer}>
          {ageButtons.map(({type, ageStyles, title: ageTitle, stateVar}) => (
            <ButtonWithIcon
              type={type}
              ageButtonStyles={ageStyles}
              title={ageTitle}
              isOpted={state.gender === ageTitle}
              buttonHandler={() => updateState(ageTitle, stateVar)}
            />
          ))}
        </ViewWithLabel>
        <Button
          buttonColor={validateState() ? colors.BLACK : colors.LIGHTER_GREY}
          mode="contained"
          style={styles.loginButton}
          textColor={colors.WHITE}
          title={continueButtonTitle}
          onPress={validateState() ? onContinuePressed : null}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default InputScreen;
