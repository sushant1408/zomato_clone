import {
  SectionList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewToken,
} from 'react-native';
import { FC, useRef, useState } from 'react';
import { useStyles } from 'react-native-unistyles';

import { restaurantStyles } from '@features/delivery/styles';
import ExploreSection from '../ExploreSection';
import AllRestaurantsSection from '../AllRestaurantsSection';
import { useSharedState } from '@utils/useSharedState';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const sectionedData = [
  {
    title: 'Explore',
    data: [{}],
    renderItem: () => <ExploreSection />,
  },
  {
    title: 'All Restaurants',
    data: [{}],
    renderItem: () => <AllRestaurantsSection />,
  },
];

const MainList: FC = () => {
  const { styles } = useStyles(restaurantStyles);
  const { scrollToTop, scrollY, scrollYGlobal } = useSharedState();

  const prevScrollYTopButton = useRef<number>(0);
  const prevScrollY = useRef(0);
  const sectionListRef = useRef<SectionList>(null);

  const [isAllRestaurantSectionVisible, setIsAllRestaurantSectionVisible] =
    useState<boolean>(false);
  const [isNearEnd, setIsNearEnd] = useState<boolean>(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event?.nativeEvent?.contentOffset?.y;
    const isScrollingDown = currentScrollY > prevScrollY.current;

    scrollY.value = isScrollingDown
      ? withTiming(1, { duration: 300 })
      : withTiming(0, { duration: 300 });

    scrollYGlobal.value = currentScrollY;
    prevScrollY.current = currentScrollY;

    const containerHeight = event?.nativeEvent?.contentSize?.height;
    const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height;

    const offset = event?.nativeEvent?.contentOffset?.y;

    setIsNearEnd(offset + layoutHeight >= containerHeight - 500);
  };

  const handleScrollToTop = async () => {
    scrollToTop();
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      animated: true,
      viewPosition: 0,
    });
  };

  const backToTopStyles = useAnimatedStyle(() => {
    const isScrollingUp =
      scrollYGlobal.value < prevScrollYTopButton.current &&
      scrollYGlobal.value > 180;
    const opacity = withTiming(
      isScrollingUp && (isAllRestaurantSectionVisible || isNearEnd) ? 1 : 0,
      { duration: 300 },
    );
    const translateY = withTiming(
      isScrollingUp && (isAllRestaurantSectionVisible || isNearEnd) ? 0 : 10,
      { duration: 300 },
    );

    prevScrollYTopButton.current = scrollYGlobal.value;

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 80,
  };

  const handleViewableItemsChanged = ({
    viewableItems,
    changed,
  }: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => {
    const isAllRestaurantSectionVisible = viewableItems.some(
      item => item.section?.title === 'All Restaurants' && item.isViewable,
    );

    setIsAllRestaurantSectionVisible(isAllRestaurantSectionVisible);
  };

  return (
    <>
      <SectionList
        ref={sectionListRef}
        sections={sectionedData}
        overScrollMode="always"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        bounces={false}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) =>
          item?.id ? item?.id?.toString() : index?.toString()
        }
        contentContainerStyle={styles.listContainer}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={handleViewableItemsChanged}
        stickySectionHeadersEnabled
      />
    </>
  );
};

export default MainList;
