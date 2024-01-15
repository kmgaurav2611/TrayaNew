import {StyleSheet} from 'react-native';
import {colors} from '../../static/colors';

export const styles = StyleSheet.create({
  content: {
    overflow: 'hidden',
  },
  safeAreaContainer: {flex: 1},
  scrollViewContainer: {
    backgroundColor: colors.LIGHT_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  backButtonContainer: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '5%',
  },
  backIcon: {marginRight: 20},
  screenTitle: {fontWeight: 'bold'},
  profileSection: {
    height: 70,
    borderWidth: 0,
    borderRadius: 10,
    // Android
    elevation: 5,
    // iOS
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 20,
    marginHorizontal: '5%',
    width: '90%',
  },
  profileSectionIcon: {
    flex: 2,
    color: colors.PARROT_GREEN,
    fontSize: 50,
    marginLeft: 20,
  },
  profileSectionText: {flex: 8, fontWeight: 'bold', color: colors.DARK_GREY},
  successHelpContainer: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: '5%',
  },
  successStory: {
    marginRight: 10,
    flex: 1,
    height: 60,
    borderWidth: 0,
    borderRadius: 10,
    // Android
    elevation: 5,
    // iOS
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  successStoryIcon: {
    flex: 2,
    color: colors.PARROT_GREEN,
    fontSize: 24,
    marginLeft: 10,
  },
  successStoryText: {
    flex: 8,
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.DARK_GREY,
  },
  helpSupport: {
    marginLeft: 10,
    flex: 1,
    height: 60,
    borderWidth: 0,
    borderRadius: 10,
    // Android
    elevation: 5,
    // iOS
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
