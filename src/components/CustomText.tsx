import { Colors } from '@unistyles/theme';
import { FC, PropsWithChildren } from 'react';
import { LayoutChangeEvent, Platform, StyleSheet, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextStyle } from 'react-native/types';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
type PlatformType = 'android' | 'ios';

type CustomTextProps = {
  variant?: Variant;
  fontFamily?:
    | 'Okra-Bold'
    | 'Okra-Regular'
    | 'Okra-Black'
    | 'Okra-Light'
    | 'Okra-Medium';
  fontSize?: number;
  color?: string;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
  onLayout?: (event: LayoutChangeEvent) => void;
};

const fontSizeMap: Record<Variant, Record<PlatformType, number>> = {
  h1: { ios: 24, android: 22 },
  h2: { ios: 22, android: 20 },
  h3: { ios: 20, android: 18 },
  h4: { ios: 18, android: 16 },
  h5: { ios: 16, android: 14 },
  h6: { ios: 12, android: 10 },
  h7: { ios: 10, android: 8 },
};

const CustomText: FC<PropsWithChildren<CustomTextProps>> = ({
  children,
  color,
  fontFamily = 'Okra-Regular',
  fontSize,
  numberOfLines = undefined,
  onLayout,
  style,
  variant,
  ...rest
}) => {
  let computedFontSize: number =
    Platform.OS === 'android'
      ? RFValue(fontSize ?? 12)
      : RFValue(fontSize ?? 10);

  if (variant && fontSizeMap[variant]) {
    const defaultSize = fontSizeMap[variant][Platform.OS as PlatformType];
    computedFontSize = RFValue(fontSize ?? defaultSize);
  }

  const fontFamilyStyles = {
    fontFamily,
  };

  return (
    <Text
      onLayout={onLayout}
      style={[
        styles.text,
        { color: color ?? Colors.text, fontSize: computedFontSize },
        fontFamilyStyles,
        style,
      ]}
      numberOfLines={numberOfLines}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});
