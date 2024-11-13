import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import RollingContent from 'react-native-rolling-bar';

import { useAppDispatch } from '@states/hooks/useAppDispatch';
import { useAppSelector } from '@states/hooks/useAppSelector';
import { useSharedState } from '@utils/useSharedState';
import Icon from '@components/Icon';
import { Colors } from '@unistyles/theme';
import CustomText from '@components/CustomText';
import { setVegMode } from '@states/reducers/userSlice';
import { deliveryStyles } from '../styles';

const searchItems = [
  'Search "peda"',
  'Search "burger"',
  'Search "chat"',
  'Search "thali"',
  'Search "curries"',
  'Search "pizza"',
  'Search "paratha"',
  'Search "sandwich"',
  'Search "paneer"',
  'Search "bowl"',
  'Search "khichdi"',
  'Search "fries"',
  'Search "cake"',
  'Search "dosa"',
  'Search "biryani"',
  'Search "ladoo"',
  'Search "sweets"',
];

const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const { styles } = useStyles(deliveryStyles);
  const { scrollYGlobal } = useSharedState();

  const isVegMode = useAppSelector(state => state.user.isVegMode);

  const textColorAnimationStyles = useAnimatedStyle(() => {
    const textColor = interpolate(scrollYGlobal.value, [0, 80], [255, 0]);

    return {
      color: `rgb(${textColor}, ${textColor}, ${textColor})`,
    };
  });

  return (
    <>
      <SafeAreaView />
      <View style={[styles.flexRowBetween, styles.padding]}>
        <TouchableOpacity activeOpacity={1} style={styles.searchInputContainer}>
          <Icon
            name="search"
            iconFamily="Ionicons"
            color={isVegMode ? Colors.active : Colors.primary}
            size={20}
          />
          <RollingContent
            interval={3000}
            defaultStyle={false}
            customStyle={styles.textContainer}
          >
            {searchItems.map((item, index) => (
              <CustomText
                fontSize={12}
                fontFamily="Okra-Medium"
                key={index}
                style={styles.rollingText}
              >
                {item}
              </CustomText>
            ))}
          </RollingContent>

          <View style={styles.divider} />
          <Icon
            name="mic-outline"
            iconFamily="Ionicons"
            color={isVegMode ? Colors.active : Colors.primary}
            size={20}
          />
        </TouchableOpacity>

        <Pressable
          onPress={() => dispatch(setVegMode(!isVegMode))}
          style={styles.vegMode}
        >
          <Animated.Text
            style={[textColorAnimationStyles, styles.animatedText]}
          >
            VEG
          </Animated.Text>
          <Animated.Text
            style={[textColorAnimationStyles, styles.animatedSubText]}
          >
            MODE
          </Animated.Text>
          <Image
            source={
              isVegMode
                ? require('@assets/icons/switch_on.png')
                : require('@assets/icons/switch_off.png')
            }
            style={styles.switch}
          />
        </Pressable>
      </View>
    </>
  );
};

export default SearchBar;
