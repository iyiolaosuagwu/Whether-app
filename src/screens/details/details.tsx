/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
  ImageBackground,
  Pressable,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import {wp, hp, fontSz} from '../../utils/config';
import GStyles from '../../assets/styles/GeneralStyles';
import {styles, listItemStyles} from './styles';
import {ArrowLeftIcon, SunIcon, BackgroundImg} from '../../constants/images';
import {Typography} from '../../components';

interface DetailProps {
  navigation?: any;
  route?: any;
}

const Details: React.FC<DetailProps> = (props: any) => {
  const {navigation, route} = props;
  const [selectedTab, setSelectedTab] = useState(0);
  const tab = ['Today', 'Hourly', 'Daily'];

  const changeSelectedTab = (index: number) => {
    setSelectedTab(index);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  };

  const {textPoppinsBold} = GStyles;

  const ListItem = ({title, value}) => {
    return (
      <View style={listItemStyles.container}>
        <Typography style={listItemStyles.title}>{title}</Typography>
        <Typography>{value}</Typography>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor="rgba(0,0,0,0)"
        />
        <ImageBackground source={BackgroundImg} style={styles.topView}>
          <TouchableOpacity
            style={{paddingLeft: wp(20)}}
            onPress={() => navigation.goBack()}>
            <ArrowLeftIcon />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.bottomView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Typography style={[{fontSize: fontSz(74)}, textPoppinsBold]}>
                24°C
              </Typography>
              <Typography style={[{fontSize: fontSz(24)}, textPoppinsBold]}>
                Hyderabad
              </Typography>
              <Typography>20 Apr Wed 20°C/29°C</Typography>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <SunIcon />
              <Typography style={[{fontSize: fontSz(24)}, textPoppinsBold]}>
                Clear sky
              </Typography>
            </View>
          </View>
          <View style={styles.listWrp}>
            <ListItem title="Pressure" value="800hcpa" />
            <ListItem title="Precipitation" value="2.0 mm" />
            <ListItem title="Humidity" value="56 %" />
            <ListItem title="Air Quality" value="34" />
            <ListItem title="Wind" value="4 km/h" />
            <ListItem title="Visibility" value="11 km" />
          </View>
          <View style={styles.tabView}>
            <View style={styles.tabContainer}>
              {tab.map((el, index) => (
                <Pressable
                  style={[
                    styles.tab,
                    {
                      backgroundColor:
                        index === selectedTab ? '#431098' : 'transparent',
                      borderWidth: index === selectedTab ? 1 : 0,
                    },
                  ]}
                  key={index}
                  onPress={() => changeSelectedTab(index)}>
                  <Typography style={[styles.tabText]}>{el}</Typography>
                </Pressable>
              ))}
            </View>
            {selectedTab === 0 && (
              <View
                style={{
                  marginBottom: hp(5),
                  marginTop: hp(15),
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Typography>Now</Typography>
                <SunIcon width={wp(27)} height={hp(27)} />
                <Typography>Clear</Typography>
                <Typography>24°C</Typography>
              </View>
            )}
            {selectedTab === 1 && (
              <Typography style={styles.nodata}>No Data</Typography>
            )}
            {selectedTab === 2 && (
              <Typography style={styles.nodata}>No Data</Typography>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
