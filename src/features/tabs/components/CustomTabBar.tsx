import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React, { FC } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppSelector } from '@states/hooks/useAppSelector';
import { useSharedState } from '@utils/useSharedState';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { RFValue } from 'react-native-responsive-fontsize';
import { BOTTOM_TAB_HEIGHT, Colors, screenWidth } from '@unistyles/theme';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { TabFocusedIcon, TabIcon } from './TabIcon';
import ScalePress from '@components/ScalePress';

const CustomTabBar: FC<BottomTabBarProps> = ({ state, navigation }) => {
  const isVegMode = useAppSelector(state => state.user.isVegMode);
  const { scrollY } = useSharedState();
  const insets = useSafeAreaInsets();
  const { styles } = useStyles(tabStyles);

  const isLiveTabFocused = state.routes[state.index]?.name === 'Live';

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY:
          scrollY.value === 1
            ? withTiming(100, { duration: 300 })
            : withTiming(0, { duration: 300 }),
      },
    ],
  }));

  const indicatorStyles = useAnimatedStyle(() => {
    const baseLeft = 10;
    let slideValue = state.index === 3 ? 0.23 : 0.24;

    return {
      left: withTiming(baseLeft + state.index * screenWidth * slideValue),
    };
  });

  const onTabPress = (
    route: { key: string; name: string },
    isFocused: boolean,
  ) => {
    const event = navigation.emit({
      type: 'tabPress',
      canPreventDefault: true,
      target: route?.key,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route?.name);
    }
  };

  const onTabLongPress = (route: { key: string }) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route?.key,
    });
  };

  return (
    <>
      <Animated.View
        style={[
          styles.tabBarContainer,
          animatedStyles,
          {
            paddingBottom: insets.bottom,
            backgroundColor: isLiveTabFocused ? Colors.dark : Colors.background,
          },
        ]}
      >
        <View style={styles.tabContainer}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            return (
              <ScalePress
                key={route.key}
                style={[styles.tabItem, isFocused ? styles.focusedTabItem : {}]}
                onPress={() => onTabPress(route, isFocused)}
                onLongPress={() => onTabLongPress(route)}
              >
                {isFocused ? (
                  <TabFocusedIcon name={route.name} />
                ) : (
                  <TabIcon name={route.name} />
                )}
              </ScalePress>
            );
          })}

          <View style={styles.verticalLine} />
        </View>

        <Animated.View
          style={[
            styles.slidingIndicator,
            indicatorStyles,
            {
              backgroundColor: isLiveTabFocused
                ? '#FFFFFF'
                : isVegMode
                ? Colors.active
                : Colors.primary,
            },
          ]}
        />

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => Linking.openURL('https://www.google.com')}
          style={styles.blinkitLogoContainer}
        >
          <Image
            source={require('@assets/icons/blinkit.png')}
            style={styles.blinkitLogo}
          />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default CustomTabBar;

const tabStyles = createStyleSheet(({ colors, fonts, device }) => ({
  tabContainer: {
    width: device.width * 0.82,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
  },
  tabBarContainer: {
    width: '100%',
    position: 'absolute',
    height: BOTTOM_TAB_HEIGHT,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 5,
    shadowRadius: 11,
    shadowColor: '#000000',
    bottom: 0,
    zIndex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  verticalLine: {
    marginHorizontal: 10,
    height: '60%',
    width: 1,
    position: 'absolute',
    left: '55%',
    borderRadius: 20,
    opacity: 0.2,
    backgroundColor: colors.lightText,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  focusedTabItem: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  slidingIndicator: {
    position: 'absolute',
    top: 0,
    height: 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: '15%',
  },
  blinkitLogoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '12%',
    overflow: 'hidden',
    backgroundColor: '#F7CB46',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  blinkitLogo: {
    width: '100%',
    height: 26,
    resizeMode: 'contain',
  },
  tabLabel: {
    fontFamily: fonts.Medium,
    fontSize: RFValue(10),
    color: '#B3B3B3',
  },
  focusedTabLabel: {
    color: '#FFFFFF',
  },
}));
