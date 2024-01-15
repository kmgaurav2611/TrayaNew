import React from 'react';

export default {
  MobileNumberScreenStrings: {
    headerTop: 'Hair Loss Solutions Backed by Science.',
    login: 'Log in or Sign up',
    mobilePrefix: '+91',
    mobileNumberLabel: 'Mobile Number',
    mobileNumberPlaceholder: 'Mobile Number',
    termsAndConditions:
      "By proceeding, you consent to share your information with Traya and agree to Traya's privacy policy and terms of service.",
    otpButtonText: 'Get OTP',
  },
  InputScreenStrings: {
    inputFields: [
      {
        id: 0,
        title: 'name',
        value: '',
        label: 'Full Name',
        keyboardType: 'name-phone-pad',
        placeholder: 'Please enter your name',
        maxLength: 14,
        returnKeyType: 'next',
        nextInputToFocus: 'age',
        errorMessage: 'Enter valid name',
      },
      {
        id: 1,
        title: 'age',
        value: '',
        label: 'Age',
        keyboardType: 'number-pad',
        placeholder: 'Please enter your age',
        maxLength: 2,
        returnKeyType: 'done',
        nextInputToFocus: null,
        errorMessage: 'Enter valid age',
      },
    ],
    ageButtons: [
      {
        id: 0,
        type: 'male',
        ageStyles: {
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          flex: 1,
        },
        title: 'Male',
        stateVar: 'gender',
      },
      {
        id: 1,
        type: 'female',
        ageStyles: {
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          flex: 1,
        },
        title: 'Female',
        stateVar: 'gender',
      },
    ],
    genderLabel: 'Select your gender',
    genderTitle: 'gender',
    genderErrorMessage: 'Please select your gender',
    header: "Let's get started",
    title: 'We need a few details to kickstart your journey',
    continueButtonTitle: 'Continue',
  },
  CheckoutScreenStrings: {
    addresses: [
      {
        id: 0,
        name: 'Kumar Gaurav',
        line1: 'My address, bangalore, Karnataka',
        line2: 'myemail@gmail.com,7978474470',
      },
      {
        id: 0,
        name: 'Kumar Gaurav',
        line1: 'My second address, Patna, Bihar',
        line2: 'myemail@gmail.com,7978474470',
      },
    ],
    paymentMethods: [
      {
        id: 0,
        title: 'Pay via UPI',
        description: 'Use any registered UPI ID',
        icon: 'forward',
      },
      {
        id: 0,
        title: 'Pay via Card',
        description: 'Use any Credit/Debit card',
        icon: 'card',
      },
    ],
    orderSummary: 'Order summary',
    cartCount: '4 items',
    couponCodePlaceholder: 'Enter coupon code',
    deliveryContainerTitle: 'Delivery',
    editButton: 'Edit',
    payMethodContainerTitle: 'Payment Method',
    payButton: 'Pay',
    bottomSheetText: 'Show the list of options here and the add/edit buttons',
  },
  profileScreen: {
    you: 'You',
    userName: 'Kumar Gaurav',
    successStories: 'Success Stories',
    helpAndSupport: 'Help & Support',
    faqConfig: [
      {
        id: 0,
        leftIcon: 'pie-chart',
        rightIcon: 'chevron-right',
        text: 'Hair Photos',
        isExpandable: false,
      },
      {
        id: 1,
        leftIcon: 'tag',
        rightIcon: 'chevron-right',
        text: 'All Products',
        isExpandable: false,
      },
      {
        id: 2,
        leftIcon: 'list-alt',
        rightIcon: 'chevron-right',
        text: 'Read More',
        isExpandable: true,

        contents: [
          {
            id: 20,
            leftIcon: 'link',
            rightIcon: 'chevron-right',
            text: 'Reference cited',
            isExpandable: false,
          },
          {
            id: 21,
            leftIcon: 'flask',
            rightIcon: 'chevron-right',
            text: 'Traya Science',
            isExpandable: false,
          },
        ],
      },
      {
        id: 3,
        leftIcon: 'info-circle',
        rightIcon: 'chevron-right',
        text: 'Terms & Policies',
        isExpandable: true,
        contents: [
          {
            id: 30,
            leftIcon: 'shield',
            rightIcon: 'chevron-right',
            text: 'Refund, Return and Cancellation Policy',
            isExpandable: false,
          },
          {
            id: 31,
            leftIcon: 'money',
            rightIcon: 'chevron-right',
            text: 'Money Back Policy',
            isExpandable: false,
          },
          {
            id: 30,
            leftIcon: 'lock',
            rightIcon: 'chevron-right',
            text: 'Privacy Policy',
            isExpandable: false,
          },
          {
            id: 31,
            leftIcon: 'info',
            rightIcon: 'chevron-right',
            text: 'Terms & Conditions',
            isExpandable: false,
          },
        ],
      },
      {
        id: 4,
        leftIcon: 'plug',
        rightIcon: 'chevron-right',
        text: 'Logout',
        isExpandable: false,
      },
    ],
  },
};