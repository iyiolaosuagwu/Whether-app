import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(27, 15, 54, 1)',
    paddingTop: hp(40),
  },
  topView: {
    height: hp(350),
  },
  bottomView: {
    flex: 1,
    marginTop: -15,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#431098',
  },
  tabContainer: {
    height: 30,
    borderRadius: 50,
    flexDirection: 'row',
    borderColor: '#431098',
    borderWidth: 2,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(50),
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },
  tabText: {
    fontSize: hp(16),
    color: '#fff',
  },
  listWrp: {
    marginVertical: hp(20),
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabView: {
    backgroundColor: '#622FB5',
    paddingTop: hp(20),
    paddingBottom: hp(10),
    paddingHorizontal: wp(20),
    borderRadius: hp(20),
    height: hp(118),
  },
  nodata: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export const listItemStyles = StyleSheet.create({
  container: {
    marginHorizontal: wp(11),
    marginBottom: hp(20),
    width: '20%',
  },
  title: {
    color: '#9F7ADD',
    fontSize: hp(12),
  },
  value: {
    fontSize: hp(18),
  },
});
