import { View, Platform } from 'react-native';
import { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { deliveryStyles } from './styles';
import { useSharedState } from '@utils/useSharedState';
import HeaderSection from './components/HeaderSection';
import Graphics from './components/Graphics';
import MainList from './components/list/MainList';

const DeliveryScreen: FC = () => {
  const { styles } = useStyles(deliveryStyles);
  const insets = useSafeAreaInsets();
  const { scrollYGlobal } = useSharedState();

  const moveUpStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 50],
      [0, -50],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ translateY }],
    };
  });

  const moveUpWithoutExtrapolateStyles = useAnimatedStyle(() => {
    const translateY = interpolate(scrollYGlobal.value, [0, 50], [0, -50]);

    return {
      transform: [{ translateY }],
    };
  });

  const bgColorChangesStyles = useAnimatedStyle(() => {
    const alpha = interpolate(scrollYGlobal.value, [1, 50], [0, 1]);

    return {
      backgroundColor: `rgba(255, 255, 255, ${alpha})`,
    };
  });

  return (
    <View style={styles.container}>
      <View
        style={{ height: Platform.OS === 'android' ? insets.top : undefined }}
      />
      <Animated.View style={[moveUpStyles]}>
        <Animated.View style={[moveUpWithoutExtrapolateStyles]}>
          <Graphics />
        </Animated.View>
        <Animated.View style={[bgColorChangesStyles, styles.topHeader]}>
          <HeaderSection />
        </Animated.View>
      </Animated.View>

      <Animated.View style={[moveUpStyles]}>
        <MainList />
      </Animated.View>
    </View>
  );
};

export default DeliveryScreen;
