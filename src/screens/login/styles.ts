import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {fontSz, hp, wp} from '../../utils/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(35),
    paddingHorizontal: wp(25),
    paddingBottom: hp(41),
  },
  wrapper: {
    flex: 1,
  },
  svgWrp: {
    flex: 1.5,
  },
  textWrp: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: fontSz(36),
    lineHeight: hp(48),
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: fontSz(16),
    marginBottom: hp(51),
  },
  btnWrp: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  input: {
    marginBottom: hp(30),
  },
  forgotPwdWrp: {
    alignSelf: 'flex-end',
  },
  forgotPwd: {
    textAlign: 'right',
    fontSize: fontSz(16),
    marginTop: hp(10),
  },
  orWrp: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: hp(16),
  },
  orText: {
    marginHorizontal: wp(5),
    fontSize: fontSz(16),
  },
  divider: {
    height: hp(1),
    backgroundColor: colors.white,
    flex: 1,
  },
  signintext: {
    textAlign: 'center',
    fontSize: fontSz(28),
    fontFamily: 'Poppins-Bold',
    lineHeight: hp(31),
    marginBottom: hp(35),
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: hp(58),
  },
  btnWrapper: {
    alignItems: 'center',
  },
  button: {
    height: hp(80),
    width: hp(80),
    borderRadius: hp(40),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: hp(76),
    marginBottom: hp(70),
  },
  textStyle: {
    fontSize: fontSz(28),
  },
  btnText: {
    marginTop: hp(6),
    fontFamily: 'Poppins-Medium',
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  newUser: {
    textDecorationLine: 'underline',
    marginRight: wp(7),
    fontFamily: 'Poppins-Medium',
    fontSize: fontSz(20),
  },
});
