import {StyleSheet} from 'react-native';
import {colors} from '../../static/colors';

export const styles = StyleSheet.create({
  textInputStyles: {
    backgroundColor: colors.WHITE,
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.GREY,
    padding: 10,
    color: colors.DARK_GREY,
  },
  loginButton: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 10,
    height: 46,
    justifyContent: 'center',
    width: '100%',
  },
  scrollViewContainer: {
    flex: 1,
    padding: 20,
  },
  safeAreaContainer: {flex: 1},
  headerText: {fontWeight: 'bold', marginVertical: 30},
  titleText: {marginVertical: 10},
  genderContainer: {flexDirection: 'row', width: '100%', height: 50},
});
