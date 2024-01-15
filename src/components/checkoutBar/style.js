import {StyleSheet} from 'react-native';
import {colors} from '../../static/colors';
const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    backgroundColor: colors.LIGHTER_GREY,
    flexDirection: 'row',
  },
  leftSection: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  leftSectionText: {fontWeight: 500},
  rightSectionText: {
    margin: 20,
    borderRadius: 10,
  },
});

export default styles;
