import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DeliveryScreen from '@features/delivery/DeliveryScreen';
import DiningScreen from '@features/dining/DiningScreen';
import LiveScreen from '@features/live/LiveScreen';
import ReorderScreen from '@features/reorder/ReorderScreen';
import { TabFocusedIcon, TabIcon } from './components/TabIcon';
import CustomTabBar from './components/CustomTabBar';

const Tabs = createBottomTabNavigator();

const UserBottomTabs: FC = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          tabBarIcon({ focused }) {
            return focused ? (
              <TabFocusedIcon name="Delivery" />
            ) : (
              <TabIcon name="Delivery" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Reorder"
        component={ReorderScreen}
        options={{
          tabBarIcon({ focused }) {
            return focused ? (
              <TabFocusedIcon name="Reorder" />
            ) : (
              <TabIcon name="Reorder" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Dining"
        component={DiningScreen}
        options={{
          tabBarIcon({ focused }) {
            return focused ? (
              <TabFocusedIcon name="Dining" />
            ) : (
              <TabIcon name="Dining" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Live"
        component={LiveScreen}
        options={{
          tabBarIcon({ focused }) {
            return focused ? (
              <TabFocusedIcon name="Live" />
            ) : (
              <TabIcon name="Live" />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default UserBottomTabs;
