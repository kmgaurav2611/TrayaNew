import {StyleSheet} from 'react-native';
import {colors} from '../../static/colors';

export const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: colors.LIGHT_WHITE,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  safeAreaContainer: {flex: 1},
});
