import { View, StyleSheet, Image } from 'react-native';
import React, { FC, memo } from 'react';
import { Colors } from '@unistyles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAppSelector } from '@states/hooks/useAppSelector';

import CustomText from '@components/CustomText';
import DeliveryFocusedIcon from '@assets/tabicons/delivery_focused.png';
import DeliveryIcon from '@assets/tabicons/delivery.png';
import DiningFocusedIcon from '@assets/tabicons/dining_focused.png';
import DiningIcon from '@assets/tabicons/dining.png';
import LiveFocusedIcon from '@assets/tabicons/live_focused.png';
import LiveIcon from '@assets/tabicons/live.png';
import ReorderFocusedIcon from '@assets/tabicons/reorder_focused.png';
import ReorderIcon from '@assets/tabicons/reorder.png';

type TabIconProps = {
  name: string;
};

const TabIcon: FC<TabIconProps> = memo(({ name }) => {
  return (
    <View style={styles.tabStyles}>
      <Image
        source={
          name === 'Delivery'
            ? DeliveryIcon
            : name === 'Dining'
            ? DiningIcon
            : name === 'Reorder'
            ? ReorderIcon
            : LiveIcon
        }
        style={styles.iconStyles}
      />
      <CustomText style={styles.textStyle}>{name}</CustomText>
    </View>
  );
});

const TabFocusedIcon: FC<TabIconProps> = memo(({ name }) => {
  const isVegMode = useAppSelector(state => state.user.isVegMode);

  return (
    <View style={styles.tabStyles}>
      <Image
        source={
          name === 'Delivery'
            ? DeliveryFocusedIcon
            : name === 'Dining'
            ? DiningFocusedIcon
            : name === 'Reorder'
            ? ReorderFocusedIcon
            : LiveFocusedIcon
        }
        style={[
          styles.iconStyles,
          {
            tintColor:
              name === 'Live'
                ? undefined
                : isVegMode
                ? Colors.active
                : Colors.primary,
          },
        ]}
      />
      <CustomText
        style={[
          styles.activeTextStyle,
          { color: name === 'Live' ? '#FFFFFF' : undefined },
        ]}
      >
        {name}
      </CustomText>
    </View>
  );
});

export { TabIcon, TabFocusedIcon };

const styles = StyleSheet.create({
  tabStyles: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyles: {
    height: RFValue(18),
    width: RFValue(18),
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 4,
    color: Colors.lightText,
    fontSize: RFValue(9.5),
  },
  activeTextStyle: {
    textAlign: 'center',
    marginTop: 4,
    color: Colors.text,
    fontSize: RFValue(9.5),
  },
});
