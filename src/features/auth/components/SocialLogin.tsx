import { View, TouchableOpacity, Platform } from 'react-native';
import { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import Icon from '@components/Icon';
import { RFValue } from 'react-native-responsive-fontsize';

const SocialLogin: FC = () => {
  const { styles } = useStyles(socialLoginStyles);

  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          iconFamily="Ionicons"
          name="logo-google"
          color="#222222"
          size={RFValue(18)}
        />
      </TouchableOpacity>
      {Platform.OS === 'ios' && (
        <TouchableOpacity style={styles.iconContainer}>
          <Icon
            iconFamily="Ionicons"
            name="logo-apple"
            color="#222222"
            size={RFValue(18)}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          iconFamily="Ionicons"
          name="ellipsis-horizontal-sharp"
          color="#222222"
          size={RFValue(18)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

const socialLoginStyles = createStyleSheet(({ colors, fonts, device }) => ({
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
    marginTop: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.border,
    borderRadius: '50%',
  },
  gimg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
}));
