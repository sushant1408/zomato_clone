import { View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useStyles } from 'react-native-unistyles';

import CustomText from '@components/CustomText';
import { Colors } from '@unistyles/theme';
import Icon from '@components/Icon';
import RecommendedList from './list/RecommendedList';
import CollectionsList from './list/CollectionsList';
import { deliveryStyles } from '../styles';
import BreakerText from '@features/auth/components/BreakerText';

const ExploreSection = () => {
  const { styles } = useStyles(deliveryStyles);

  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <View style={styles.topHidingContainer}>
      <View style={styles.flexRowCenter}>
        <Pressable
          style={styles.leftTab(selectedTab === 1)}
          onPress={() => setSelectedTab(1)}
        >
          <CustomText
            color={selectedTab === 1 ? Colors.text : Colors.lightText}
            fontFamily="Okra-Medium"
          >
            Recommended
          </CustomText>
        </Pressable>
        <Pressable
          style={styles.rightTab(selectedTab === 2)}
          onPress={() => setSelectedTab(2)}
        >
          <Icon
            name={selectedTab === 2 ? 'bookmark' : 'bookmark-outline'}
            iconFamily="Ionicons"
            color={selectedTab === 2 ? Colors.active : Colors.lightText}
            size={14}
          />
          <CustomText
            color={selectedTab === 2 ? Colors.text : Colors.lightText}
            fontFamily="Okra-Medium"
          >
            Collections
          </CustomText>
        </Pressable>
      </View>

      {selectedTab === 1 && <RecommendedList />}
      {selectedTab === 2 && <CollectionsList />}

      <BreakerText>EXPLORE</BreakerText>
      {/* Explore section */}
      <BreakerText>WHAT'S ON YOUR MIND?</BreakerText>
      
      <BreakerText>ALL RESTAURANTS</BreakerText>
    </View>
  );
};

export default ExploreSection;
