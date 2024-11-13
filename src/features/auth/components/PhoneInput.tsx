import { View, Text, Pressable, TextInput } from 'react-native';
import React, { FC, useState } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import CountryPicker, { Country } from 'react-native-country-picker-modal';

import { Colors, shadowStyle } from '@unistyles/theme';
import CustomText from '@components/CustomText';
import Icon from '@components/Icon';

type PhoneInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  selectedCountry: Country;
  onChangeCountry: (country: Country) => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
};

const PhoneInput: FC<PhoneInputProps> = ({
  onChangeText,
  value,
  onChangeCountry,
  selectedCountry,
  onBlur,
  onFocus,
}) => {
  const [countryPickerVisible, setCountryPickerVisible] =
    useState<boolean>(false);

  const { styles } = useStyles(phoneInputStyles);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setCountryPickerVisible(true)}
        style={styles.countryPickerContainer}
      >
        <CountryPicker
          countryCode={selectedCountry?.cca2 ?? 'IN'}
          visible={countryPickerVisible}
          withCallingCode
          withFlagButton
          withFilter
          withModal
          onClose={() => setCountryPickerVisible(false)}
          onSelect={onChangeCountry}
        />
        <Icon
          iconFamily="Ionicons"
          name="caret-down-sharp"
          color={Colors.lightText}
          size={18}
        />
      </Pressable>
      <View style={styles.phoneInputContainer}>
        <CustomText fontFamily="Okra-Bold">
          +{selectedCountry?.callingCode[0] ?? 91}
        </CustomText>
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
    backgroundColor: '#FFFFFF',
    padding: 8,
    height: 45,
    flexDirection: 'row',
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneInputContainer: {
    ...shadowStyle,
    backgroundColor: '#FFFFFF',
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
