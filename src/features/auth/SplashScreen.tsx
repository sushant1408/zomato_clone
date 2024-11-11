import { View, Text, StatusBar, Platform, Image } from 'react-native';
import { FC, useEffect } from 'react';
import { useStyles } from 'react-native-unistyles';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { splashStyles } from './styles';
import CustomText from '@components/CustomText';
import { resetAndNavigate } from '@navigation/utils';

const SplashScreen: FC = () => {
  const { styles } = useStyles(splashStyles);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate('LoginScreen');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.logoImage}
      />
      <Animated.View
        entering={FadeInDown.delay(400).duration(800)}
        style={styles.animatedContainer}
      >
        <Image
          source={require('@assets/images/tree.png')}
          style={styles.treeImage}
        />
        <CustomText
          variant="h5"
          fontFamily="Okra-Medium"
          style={styles.msgText}
          color="white"
        >
          Carbon and Plastic Neutral Deliveries in India
        </CustomText>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
