import {StyleSheet} from 'react-native';
import {colors} from '../../static/colors';

export const styles = StyleSheet.create({
  safeAreaContainer: {flex: 1},
  scrollViewConatiner: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    padding: '5%',
  },
  loginButton: {
    position: 'absolute',
    bottom: 20,
    borderRadius: 10,
    height: 46,
    justifyContent: 'center',
    width: '100%',
  },
  borderedContainer: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.LIGHTER_GREY,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  summaryLeftContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  summaryText: {
    marginHorizontal: 15,
    fontWeight: 400,
  },
  summaryRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  couponIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressContainer: {minHeight: 50, marginHorizontal: 15, marginVertical: 10},
  addressLine1: {fontWeight: 400},
  addressline2: {fontWeight: 300},
  addressLine3: {fontWeight: 200, marginVertical: 5},
  paymentMethodContainer: {
    flexDirection: 'row',
    borderColor: colors.LIGHTER_GREY,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    minHeight: 60,
    alignItems: 'center',
  },
  paymentIcon: {
    borderColor: colors.LIGHTER_GREY,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 5,
  },
  paymentTextContainer: {marginLeft: 20},

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: '5%',
  },
});
