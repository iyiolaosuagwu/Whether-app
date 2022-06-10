import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import {Typography, CustomInput} from '../../components';
import ActionButton from '../../components/Button';
import {fontSz} from '../../utils/config';
import colors from '../../utils/colors';
import {GoogleIcon, AppleIcon} from '../../constants/images';
import {styles} from './styles';
import {setUserData} from '../../redux/actions/index';
import {setUser} from '../../utils/helpers';

interface LoginProps {
  navigation?: any;
}

const user = {
  email: 'iyiola@gmail.com',
  password: '123456',
};

const Login: React.FC<LoginProps> = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [usernameError, setusernameError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [loading, setloading] = useState(false);

  const toHome = () => {
    navigation.navigate('Tabs');
  };

  const login = () => {
    setloading(true);
    if (passwordError) {
      setpasswordError(false);
    }
    if (usernameError) {
      setusernameError(false);
    }
    Keyboard.dismiss();
    setTimeout(() => {
      if (username !== user.email) {
        Alert.alert('Error', 'Incorrect username', [
          {
            text: 'Okay',
            onPress: () => console.log('pressed'),
          },
        ]);
        setloading(false);
      }
      if (password !== user.password) {
        Alert.alert('Error', 'Incorrect Password', [
          {
            text: 'Okay',
            onPress: () => console.log('pressed'),
          },
        ]);
        setloading(false);
      }
      if (username === user.email && password === user.password) {
        setloading(false);
        dispatch(setUserData(user));
        setUser(user);
        toHome();
      }
    }, 2500);
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor="rgba(127, 76, 210, 1)"
      />
      <LinearGradient
        colors={['rgba(127, 76, 210, 1)', 'rgba(41, 24, 101, 1)']}
        style={styles.container}
        start={{x: 0.5, y: 0.1}}>
        <View>
          <Typography style={styles.header}>Login</Typography>
          <Typography style={styles.description}>
            Enter your account details to login.
          </Typography>
          <CustomInput
            value={username}
            onChangeText={(value: string) => setusername(value)}
            autoFocus={true}
            placeholder="Email"
            keyboard="email-address"
            containerStyle={styles.input}
            placeholderColor={colors.white}
            editable={!loading}
          />
          <CustomInput
            value={password}
            onChangeText={(value: string) => setpassword(value)}
            keyboard="default"
            secureTextEntry={true}
            password={true}
            placeholder="Password"
            placeholderColor={colors.white}
            editable={!loading}
          />
          <TouchableOpacity style={styles.forgotPwdWrp}>
            <Typography style={styles.forgotPwd}>Forgot password?</Typography>
          </TouchableOpacity>
          <View style={styles.orWrp}>
            <View style={styles.divider} />
            <Typography style={styles.orText}>or</Typography>
            <View style={styles.divider} />
          </View>
          <Typography style={styles.signintext}>Sign in with</Typography>
          <View style={styles.btnContainer}>
            <View style={styles.btnWrapper}>
              <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <GoogleIcon />
              </TouchableOpacity>
              <Typography style={styles.btnText}>Google</Typography>
            </View>
            <View style={styles.btnWrapper}>
              <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <AppleIcon />
              </TouchableOpacity>
              <Typography style={styles.btnText}>Apple</Typography>
            </View>
          </View>
        </View>
        <ActionButton isLoading={loading} onPress={() => login()}>
          Login
        </ActionButton>
        <TouchableOpacity style={styles.textWrapper}>
          <Typography style={styles.newUser}>I’m new here</Typography>
          <Icon name="arrowright" size={fontSz(20)} color={colors.white} />
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

export default Login;
