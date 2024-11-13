import {
  View,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { FC, useEffect, useRef, useState } from 'react';
import { useStyles } from 'react-native-unistyles';

import CustomText from '@components/CustomText';
import { resetAndNavigate } from '@navigation/utils';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';
import { loginStyles } from './styles';
import BreakerText from './components/BreakerText';
import PhoneInput from './components/PhoneInput';
import SocialLogin from './components/SocialLogin';

const LoginScreen: FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const keyboardOffsetHeight = useKeyboardOffsetHeight();

  const [phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { styles } = useStyles(loginStyles);

  useEffect(() => {
    if (keyboardOffsetHeight === 0) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -keyboardOffsetHeight * 0.25,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [keyboardOffsetHeight]);

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetAndNavigate('UserBottomTabs');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        style={{
          transform: [{ translateY: animatedValue }],
        }}
        contentContainerStyle={styles.bottomContainer}
      >
        <CustomText variant="h2" fontFamily="Okra-Bold" style={styles.title}>
          India's #1 Food Delivery and Dining App
        </CustomText>
        <BreakerText>Log in or Sign up</BreakerText>
        <PhoneInput
          onFocus={() => {}}
          onBlur={() => {}}
          onChangeText={setPhone}
          value={phone}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={loading}
          onPress={handleLogin}
          style={styles.buttonContainer}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <CustomText variant="h5" color="#FFFFFF">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>
        <BreakerText>or</BreakerText>
        <SocialLogin />
      </Animated.ScrollView>
      <View style={styles.footer}>
        <CustomText>By continuing you agree to our</CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms of Services</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policies</CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
