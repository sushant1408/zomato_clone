import { ViewStyle, Animated, TouchableOpacity } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';

type ScalePressProps = {
  onPress?: () => void;
  onLongPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

const ScalePress: FC<PropsWithChildren<ScalePressProps>> = ({
  children,
  onLongPress,
  onPress,
  style,
}) => {
  const scaleValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={1}
      style={{ ...style }}
    >
      <Animated.View
        style={{ transform: [{ scale: scaleValue }], width: '100%' }}
      >
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ScalePress;
