import {
  View,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { FC, useState } from 'react';
import { useStyles } from 'react-native-unistyles';
import Animated from 'react-native-reanimated';

import CustomText from '@components/CustomText';
import { loginStyles } from './styles';
import BreakerText from './components/BreakerText';
import PhoneInput from './components/PhoneInput';
import SocialLogin from './components/SocialLogin';
import { resetAndNavigate } from '@navigation/utils';

const LoginScreen: FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { styles } = useStyles(loginStyles);

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
