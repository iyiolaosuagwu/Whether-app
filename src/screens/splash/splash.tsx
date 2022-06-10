import React, {useEffect, useState} from 'react';
import {View, StatusBar, SafeAreaView, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {Typography} from '../../components';
import ActionButton from '../../components/Button';
import {wp} from '../../utils/config';
import {getUser} from '../../utils/helpers';
import {setUserData} from '../../redux/actions/index';
import {StormIcon} from '../../constants/images';
import {styles} from './styles';

interface SplashscreenProps {
  navigation?: any;
}

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const SplashScreen: React.FC<SplashscreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    checkUser();
  }, []);

  const toHome = () => {
    navigation.replace('Tabs');
  };

  const toLogin = () => {
    navigation.navigate('Login');
  };

  const checkUser = async () => {
    const user = await getUser();
    if (user) {
      setTimeout(() => {
        setAuth(true);
        dispatch(setUserData(user));
        navigation.replace('Tabs');
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="rgba(27, 15, 54, 1)"
      />
      <LinearGradient
        colors={['rgba(98, 47, 181, 1)', 'rgba(27, 15, 54, 1)']}
        style={styles.container}
        start={{x: 0.5, y: 0}}>
        <View style={styles.svgWrp}>
          <StormIcon width={WIDTH - wp(20)} height={HEIGHT / 2} />
        </View>
        <View style={styles.btnWrp}>
          <Animatable.View
            duration={800}
            delay={1000}
            useNativeDriver={true}
            animation="fadeIn">
            <Typography style={styles.header}>My weather app</Typography>
            <Typography style={styles.description}>
              Check Live weather updates all over the world with just one tap
            </Typography>
          </Animatable.View>
          <Animatable.View
            duration={800}
            delay={1000}
            useNativeDriver={true}
            animation={{
              from: {
                opacity: 0,
              },
              to: {
                opacity: 1,
              },
            }}>
            <ActionButton
              onPress={() => {
                auth ? toHome() : toLogin();
              }}>
              Get started
            </ActionButton>
          </Animatable.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SplashScreen;
