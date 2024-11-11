import { View, Text, Pressable, TextInput } from 'react-native';
import React, { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Colors, shadowStyle } from '@unistyles/theme';
import CustomText from '@components/CustomText';
import Icon from '@components/Icon';

type PhoneInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
};

const PhoneInput: FC<PhoneInputProps> = ({
  onChangeText,
  value,
  onBlur,
  onFocus,
}) => {
  const { styles } = useStyles(phoneInputStyles);

  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer}>
        <CustomText variant="h2" fontSize={18}>🇮🇳</CustomText>
        <Icon
          iconFamily="Ionicons"
          name="caret-down-sharp"
          color={Colors.lightText}
          size={18}
        />
      </Pressable>
      <View style={styles.phoneInputContainer}>
        <CustomText fontFamily="Okra-Bold">+91</CustomText>
        <TextInput
          placeholder="Enter mobile number"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          keyboardType="phone-pad"
          placeholderTextColor={Colors.lightText}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

const phoneInputStyles = createStyleSheet(({ colors, fonts, device }) => ({
  container: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  countryPickerContainer: {
    ...shadowStyle,
    backgroundColor: '#fff',
    padding: 8,
    height: 45,
    flexDirection: 'row',
    gap: 5,
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneInputContainer: {
    ...shadowStyle,
    backgroundColor: '#fff',
    width: '78%',
    paddingHorizontal: 8,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  input: {
    height: 45,
    fontFamily: fonts.Medium,
    width: '100%',
  },
  gimg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
}));
