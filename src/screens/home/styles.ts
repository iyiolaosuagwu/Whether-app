import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(27, 15, 54, 1)',
    paddingTop: hp(30),
  },
  topView: {
    height: hp(350),
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 26,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  bottomView: {
    flex: 1,
    paddingHorizontal: wp(20),
    paddingVertical: hp(25),
    backgroundColor: '#431098',
    marginTop: hp(-20),
    flexDirection: 'column',
  },
  h1: {
    fontSize: hp(28),
    color: '#fff',
  },
  p: {
    fontSize: hp(13),
    color: '#fff',
  },
  card: {
    height: hp(217),
    overflow: 'hidden',
    borderRadius: 20,
    marginTop: hp(25),
    paddingHorizontal: wp(22),
    paddingVertical: hp(22),
    marginBottom: hp(25),
  },
});

export const listItemStyles = StyleSheet.create({
  container: {
    backgroundColor: '#622FB5',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
    borderRadius: 16,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  value: {
    fontSize: hp(20),
  },
});
