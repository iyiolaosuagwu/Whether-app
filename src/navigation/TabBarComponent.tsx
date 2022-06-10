import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  UIManager,
  Platform,
  LayoutAnimation,
} from 'react-native';
import colors from '../utils/colors';
import {hp, wp} from '../utils/config';
import {
  HomeActive,
  SearchUnActive,
  CompassUnActive,
  SettingsUnActive,
} from '../constants/images';
import {
  NavigationProp,
  NavigationState,
  NavigatorScreenParams,
} from '@react-navigation/native';

interface MyTabBarprops {
  state?: NavigationState;
  navigation?: NavigationProp;
  descriptors?: NavigatorScreenParams;
}

const MyTabBar: React.FC<MyTabBarprops> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const imagesObj = {
    home: {
      inActive: <HomeActive height={hp(30)} width={wp(30)} />,
      isActive: <HomeActive height={hp(30)} width={wp(30)} />,
    },
    search: {
      inActive: <SearchUnActive height={hp(30)} width={wp(30)} />,
      isActive: <SearchUnActive height={hp(30)} width={wp(30)} />,
    },
    compass: {
      inActive: <CompassUnActive height={hp(30)} width={wp(30)} />,
      isActive: <CompassUnActive height={hp(30)} width={wp(30)} />,
    },
    settings: {
      inActive: <SettingsUnActive height={hp(30)} width={wp(30)} />,
      isActive: <SettingsUnActive height={hp(30)} width={wp(30)} />,
    },
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
              UIManager.setLayoutAnimationEnabledExperimental(true);;
          }
          LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <SingleTab
            label={label}
            images={imagesObj[label.toLowerCase()]}
            isFocused={isFocused}
            onPress={onPress}
            key={`TABS_${index}`}
          />
        );
      })}
    </View>
  );
};
const SingleTab = props => {
  const {images, isFocused, onPress, onLongPress} = props;;
  const {singleTabContainer} = styles;
  return (
    <Pressable
      onPress={onPress}
      style={singleTabContainer}
      onLongPress={onLongPress}>
      {isFocused ? images.isActive : images.inActive}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.purple,
    height: hp(64),
    width: '100%',
    alignItems: 'center',
    bottom: 0,
  },
  singleTabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '25%',
    height: hp(64),
  },
});
export default MyTabBar;
