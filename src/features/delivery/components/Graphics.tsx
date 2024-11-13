import { View, Platform } from 'react-native';
import { FC } from 'react';
import { useStyles } from 'react-native-unistyles';
import { deliveryStyles } from '../styles';
import LottieView from 'lottie-react-native';

const Graphics: FC = () => {
  const { styles } = useStyles(deliveryStyles);

  return (
    <View pointerEvents="none" style={styles.lottieContainer}>
      <LottieView
        source={require('@assets/animations/event.json')}
        autoPlay
        loop={Platform.OS !== 'android'}
        hardwareAccelerationAndroid
        style={styles.lottie}
      />
    </View>
  );
};

export default Graphics;
