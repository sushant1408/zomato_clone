import { View, Text } from 'react-native';
import { FC, PropsWithChildren } from 'react';
import { useStyles } from 'react-native-unistyles';

import { loginStyles } from '../styles';
import CustomText from '@components/CustomText';
import { Colors } from '@unistyles/theme';

const BreakerText: FC<PropsWithChildren> = ({ children }) => {
  const { styles } = useStyles(loginStyles);

  return (
    <View style={styles.breakerContainer}>
      <View style={styles.horizontalLine} />
      <CustomText
        style={styles.breakerText}
        fontSize={12}
        fontFamily="Okra-Medium"
      >
        {children}
      </CustomText>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default BreakerText;
