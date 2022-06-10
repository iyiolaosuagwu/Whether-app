import {StyleSheet} from 'react-native';
import {fontSz, hp, wp} from '../../utils/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(25),
    paddingBottom: hp(41),
  },
  wrapper: {
    flex: 1,
  },
  svgWrp: {
    flex: 1,
    marginTop: 30,
  },
  textWrp: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: fontSz(32),
    lineHeight: hp(40),
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
  },
  description: {
    fontSize: fontSz(16),
    marginTop: hp(5),
    marginBottom: hp(70),
  },
  btnWrp: {
    flex: 1.5,
    justifyContent: 'flex-end',
  },
});
