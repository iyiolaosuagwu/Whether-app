import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  PermissionsAndroid,
  ToastAndroid,
  Alert,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import queryString from 'query-string';
import Geolocation from 'react-native-geolocation-service';
import {Typography} from '../../components';
import {wp, hp, apikey, fields, fontSz, baseURL} from '../../utils/config';
import GStyles from '../../assets/styles/GeneralStyles';
import {listItemStyles, styles} from './styles';
import {
  BackgroundImg,
  ArrowRight,
  Avatar,
  Drawer,
  ArrowDown,
  CloudOne,
  CloudTwo,
  CloudThree,
  CloudFour,
  Chennai,
  Jaipur,
} from '../../constants/images';

interface HomeProps {
  navigation?: any;
}

const Home: React.FC<HomeProps> = (props: any) => {
  const {navigation} = props;
  const [forceLocation] = useState(true);
  const [highAccuracy] = useState(true);
  const [locationDialog] = useState(true);
  const [useLocationManager] = useState(false);
  const [locale, setLocale] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState([]);

  const timezone = 'Africa/Lagos';
  const now = moment.utc();
  const startTime = moment.utc(now).add(0, 'minutes').toISOString();
  const endTime = moment.utc(now).add(1, 'days').toISOString();
  const timesteps = ['current', '1h', '1d'];
  const units = 'imperial';
  const {textPoppinsBold, textF12, textF20} = GStyles;

  useEffect(() => {
    getData();
  }, [weatherInfo]);

  const getData = async () => {
    await getLocation().then(async () => {
      await getWeather();
    });
  };

  const getWeather = async () => {
    const latitude = locale?.coords?.latitude;
    const longitude = locale?.coords?.longitude;
    const location = [latitude, longitude];

    const getTimelineParameters = queryString.stringify(
      {
        apikey,
        location,
        fields,
        units,
        timesteps,
        startTime,
        endTime,
        timezone,
      },
      {arrayFormat: 'comma'},
    );

    await fetch(baseURL + '?' + getTimelineParameters, {
      method: 'GET',
      compress: true,
    })
      .then(result => result.json())
      .then(response => {
        const weather = response?.data?.timelines;
        console.log(weather);
        setWeatherInfo(weather);
      })
      .catch(error => console.error('error: ' + error));
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        setLocale(position);
        console.log(position, 'location');
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocale(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
      },
    );
  };

  const WeatherCard = ({icon, value}) => {
    return (
      <View style={listItemStyles.container}>
        <View>{icon}</View>
        <Typography>{value}</Typography>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor="rgba(27, 15, 54, 1)"
        />
        <ImageBackground source={BackgroundImg} style={styles.topView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Avatar />
            <Drawer />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Typography style={[styles.h1, textPoppinsBold]}>Hyderabad</Typography>
              <Typography style={styles.p}>20 Apr Wed 20°C/29°C</Typography>
            </View>
            <View>
              <Typography style={[styles.h1, textPoppinsBold]}>24°C</Typography>
              <Typography style={styles.p}>Clear sky</Typography>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Typography style={[textF12]}>Swipe down for details</Typography>
            <ArrowDown height={hp(10)} width={wp(20)} />
          </View>
        </ImageBackground>
        <View style={styles.bottomView}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              activeOpacity={0.8}
              style={{flex: 1, marginRight: wp(16)}}>
              <ImageBackground source={Jaipur} style={styles.card}>
                <Typography style={[textF20, textPoppinsBold]}>Jaipur 30°C</Typography>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              activeOpacity={0.8}
              style={{flex: 1}}>
              <ImageBackground source={Chennai} style={styles.card}>
                <Typography style={[textF20, textPoppinsBold]}>Chennai 22°C</Typography>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <Typography style={{fontSize: fontSz(20)}}>Today</Typography>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: hp(10),
              alignItems: 'center',
            }}>
            <WeatherCard icon={<CloudOne />} value="24°C" />
            <WeatherCard icon={<CloudTwo />} value="24°C" />
            <WeatherCard icon={<CloudThree />} value="24°C" />
            <WeatherCard icon={<CloudFour />} value="24°C" />
            <ArrowRight height={hp(20)} width={wp(10)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(27, 15, 54, 1)',
//     paddingTop: hp(40),
//   }
// })

export default Home;
