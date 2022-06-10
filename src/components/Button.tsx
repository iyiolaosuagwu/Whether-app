// import React from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import GeneralStyles from '../assets/styles/GeneralStyles';
// import { Spinner } from './Spinner';
// import { Typography } from './Typography';
// import colors from '../utils/colors';
// import { hp } from '../utils/config';

// interface CustomButtonProps {
//   onPress?: any;
//   disabled?: boolean;
//   loading?: boolean;
//   buttonStyle?: any;
//   onPressOut?: any;
//   onPressIn?: any;
//   onLongPress?: any;
//   spinnerColor?: String;
//   textStyle?: any;
//   buttonText?: String
// }

// const CustomButton: React.FC<CustomButtonProps>= (props) => {
//     const {
//       containerStyle,
//       touchableContainerStyle,
//       contentContainer,
//       disabledStyles,
//       buttonTextStyles
//     } = styles;
//     const { centerContentStyle } = GeneralStyles;
//     const {
//       onPress,
//       disabled,
//       buttonStyle,
//       onPressOut,
//       onPressIn,
//       onLongPress,
//       loading,
//       spinnerColor,
//       textStyle,
//       buttonText,
//     } = props;
//     const buttonDisabled = disabled || loading ? true : false;
//     const buttonDisabledStyle = disabled || loading ? disabledStyles : '';

//     const renderSpinnerOrText = () => {
//         const color = spinnerColor ? spinnerColor : colors.white;
//         if (loading) {
//         return <Spinner color={color} size={20} />;
//         }
//             return(
//                 <Typography
//                   style={[
//                     buttonTextStyles,
//                     textStyle,
//                     disabled ? {color: '#AAAAB3'} : {color: colors.white}
//                   ]}>
//                     {buttonText}
//                 </Typography>
//             );
//     }

//     return (
//       <View style={containerStyle}>
//         <TouchableOpacity
//             activeOpacity={0.8}
//             onPress={onPress}
//             onPressIn={onPressIn}
//             onPressOut={onPressOut}
//             onLongPress={onLongPress}
//             disabled={buttonDisabled}
//             style={[
//                 touchableContainerStyle,
//                 buttonDisabledStyle,
//                 centerContentStyle,
//                 buttonStyle
//             ]}>
//             <View style={contentContainer}>
//                 {renderSpinnerOrText()}
//             </View>
//         </TouchableOpacity>
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//   containerStyle: {
//     width: '100%',
//   },
//   touchableContainerStyle: {
//     justifyContent:'center',
//     borderRadius: hp(25),
//     backgroundColor: colors.purple,
//     height: hp(98)
//   },
//   contentContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonTextStyles: {
//     ...GeneralStyles.textPoppinsMedium,
//     fontSize: hp(32),
//     lineHeight: hp(48),
//     fontWeight: '600',
//   },
//   disabledStyles: {
//     // backgroundColor: '#E5E5E8',
//   },
// });

// export { CustomButton };

/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import colors from '../utils/colors';
import {fontSz, hp} from '../utils/config';

type ButtonType = {
  isLoading?: boolean;
  children: ReactNode;
  disabled?: any;
  testID?: string;
  onPress?: () => void;
  extraActionButtonStyles?: ViewStyle;
};

function ActionButton(_props: ButtonType) {
  const {
    children,
    disabled,
    testID,
    isLoading = false,
    onPress,
    extraActionButtonStyles,
  } = _props;
  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      style={[btnStyle.btn, extraActionButtonStyles]}
      activeOpacity={0.8}
      onPress={onPress}
      testID={testID}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={btnStyle.text}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}

const btnShadow = {
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowRadius: 10,
  shadowColor: 'rgba(0, 0, 0, 0.06)',
  shadowOpacity: 1,
};

const btnStyle = StyleSheet.create({
  btn: {
    borderRadius: 25,
    height: hp(70),
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    ...btnShadow,
  },
  text: {
    color: colors.white,
    fontSize: fontSz(25),
  },
});

export default ActionButton;
