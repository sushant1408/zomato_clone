import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import Icon from '@components/Icon';
import CustomText from '@components/CustomText';
import { useAppSelector } from '@states/hooks/useAppSelector';
import { useSharedState } from '@utils/useSharedState';
import { Colors, screenWidth } from '@unistyles/theme';
import { deliveryStyles } from '../styles';

const LocationHeader: FC = () => {
  const { scrollYGlobal } = useSharedState();
  const { styles } = useStyles(deliveryStyles);
  const isVegMode = useAppSelector(state => state.user.isVegMode);

  const textColor = '#FFFFFF';

  const opacityFadingStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [0, 80], [1, 0]);

    return {
      opacity,
    };
  });

  return (
    <Animated.View style={[opacityFadingStyles]}>
      <SafeAreaView />
      <View style={styles.flexRowBetween}>
        <View style={styles.flexRowGap}>
          <Icon
            name="map-marker"
            iconFamily="MaterialCommunityIcons"
            color={isVegMode ? Colors.active : Colors.primary}
            size={32}
          />

          <View style={{ maxWidth: screenWidth * 0.75 }}>
            <TouchableOpacity style={styles.flexRow}>
              <CustomText variant="h5" color={textColor} fontFamily="Okra-Bold">
                Home
              </CustomText>
              <Icon
                name="chevron-down"
                iconFamily="MaterialCommunityIcons"
                size={18}
                color={textColor}
              />
            </TouchableOpacity>
            <CustomText
              numberOfLines={1}
              ellipsizeMode="tail"
              color={textColor}
              fontFamily="Okra-Medium"
            >
              Flat no. B-1002, Shriniwas Q Homes, Sr. No. 9/1/19, Chintamani
              Park Road, Kharadi, Pune - 411014
            </CustomText>
          </View>
        </View>

        <View style={styles.flexRowGap}>
          <TouchableOpacity activeOpacity={0.6} style={styles.profileAvatar}>
            <Image
              source={require('@assets/icons/golden_circle.png')}
              style={styles.goldenCircle}
            />
            <Image
              source={require('@assets/images/user.jpeg')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default LocationHeader;
