import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useRef, useMemo, useCallback} from 'react';
import {styles} from './style';
import {Button, Text, TextInput} from '../../components';
import {colors} from '../../static/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {withCheckoutContainer} from '../../hoc';
import BottomSheet from '@gorhom/bottom-sheet';
import {strings} from '../../assets';

const {
  CheckoutScreenStrings: {
    addresses,
    paymentMethods,
    orderSummary,
    cartCount,
    couponCodePlaceholder,
    deliveryContainerTitle,
    editButton,
    payMethodContainerTitle,
    payButton,
    bottomSheetText,
  },
} = strings;
const ViewWithCheckoutContainer = withCheckoutContainer(View);

const CheckoutScreen = ({}) => {
  const [coupon, setCoupon] = useState('');
  const [addressIndex, setAddressIndex] = useState(0);
  const [paymentOptionIndex, setPaymentOptionIndex] = useState(0);

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const handleSheetChanges = useCallback(index => {
    // console.log('handleSheetChanges', index);
  }, []);

  const openBottomSheet = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={styles.scrollViewConatiner}>
        <View style={styles.borderedContainer}>
          <View style={styles.summaryLeftContainer}>
            <FontAwesome
              color={colors.PARROT_GREEN}
              name={'shopping-cart'}
              size={24}
            />
            <Text size={'M'} style={styles.summaryText}>
              {orderSummary}
            </Text>
          </View>
          <View style={styles.summaryRightContainer}>
            <Text
              size={'M'}
              style={[
                styles.summaryText,
                {
                  color: colors.GREY,
                },
              ]}>
              {cartCount}
            </Text>
            <FontAwesome color={colors.GREY} name={'angle-right'} size={24} />
          </View>
        </View>
        <View style={styles.borderedContainer}>
          <View style={styles.couponIconContainer}>
            <FontAwesome color={colors.PARROT_GREEN} name={'tag'} size={24} />
          </View>
          <TextInput
            activeOutlineColor={colors.BLUE}
            maxLength={10}
            selectionColor={colors.BLUE}
            setText={setCoupon}
            text={coupon}
            keyboardType="name-phone-pad"
            placeholder={couponCodePlaceholder}
          />
        </View>
        <ViewWithCheckoutContainer
          iconName={'shopping-cart'}
          title={deliveryContainerTitle}
          buttonText={editButton}
          onButtonPress={openBottomSheet}>
          <View style={styles.addressContainer}>
            <Text style={styles.addressLine1}>
              {addresses[addressIndex]?.name}
            </Text>
            <Text style={styles.addressline2}>
              {addresses[addressIndex]?.line1}
            </Text>
            <Text style={styles.addressLine3}>
              {addresses[addressIndex]?.line2}
            </Text>
          </View>
        </ViewWithCheckoutContainer>

        <ViewWithCheckoutContainer
          iconName={'money'}
          title={payMethodContainerTitle}
          buttonText={editButton}
          onButtonPress={openBottomSheet}>
          <View style={styles.addressContainer}>
            <View style={styles.paymentMethodContainer}>
              <FontAwesome
                color={colors.GREY}
                name={paymentMethods[paymentOptionIndex]?.icon}
                size={24}
                style={styles.paymentIcon}
              />
              <View style={styles.paymentTextContainer}>
                <Text size="M">
                  {paymentMethods[paymentOptionIndex]?.title}
                </Text>
                <Text size="S" style={{color: colors.GREY}}>
                  {paymentMethods[paymentOptionIndex]?.description}
                </Text>
              </View>
            </View>
          </View>
        </ViewWithCheckoutContainer>

        <Button
          buttonColor={colors.LIGHTER_GREY}
          mode="contained"
          style={styles.loginButton}
          textColor={colors.WHITE}
          title={payButton}
          onPress={null}
        />

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text>{bottomSheetText}</Text>
          </View>
        </BottomSheet>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
