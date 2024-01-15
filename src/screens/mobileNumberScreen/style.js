import {StyleSheet} from 'react-native';
import {colors} from '../../static/colors';

export const styles = StyleSheet.create({
  textInputStyles: {
    backgroundColor: colors.WHITE,
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.GREY,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    alignSelf: 'center',
    borderRadius: 10,
    height: 46,
    justifyContent: 'center',
    width: '100%',
  },
  scrollViewContainer: {
    flex: 1,
  },
  safeAreaContainer: {flex: 1},
  landingImage: {flex: 1, height: '100%', width: '100%'},
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
  },
  headerText: {fontWeight: 700},
  loginContainer: {flexDirection: 'row', alignItems: 'center'},
  horizontalBar: {flex: 1, height: 1, backgroundColor: 'black'},
  loginTextContainer: {flex: 2},
  loginText: {
    minWidth: 50,
    textAlign: 'center',
    fontWeight: 700,
    color: colors.DARK_GREY,
  },
  prefixText: {fontWeight: 'bold', marginHorizontal: 30},
  termsAndConditionsText: {
    textAlign: 'center',
    fontWeight: 500,
    color: colors.DARK_GREY,
  },
  inputText: {height: 50, color: colors.BLACK},
});
