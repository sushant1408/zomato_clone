import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useStyles } from 'react-native-unistyles';

import { cardStyles } from './styles';
import ScalePress from '@components/ScalePress';
import CustomText from '@components/CustomText';
import { Colors } from '@unistyles/theme';
import CustomGradient from '@components/CustomGradient';

const recommendedListData = [
  {
    id: 1,
    name: 'Punjabi Dhaba - Ali...',
    discount: '40% OFF',
    discountAmount: 'up to ₹80',
    time: '25 mins',
    distance: '5.5 km',
    rating: 4.2,
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/26/adac4b96-5dea-4cd7-93f1-c654f9227a7f_82387%20(1).jpg',
  },
  {
    id: 2,
    name: 'Butter Story',
    discount: '10% OFF',
    discountAmount: 'up to ₹40',
    time: '33 mins',
    rating: 4.5,
    distance: '8.5 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_803172.JPG',
  },
  {
    id: 3,
    name: 'Limone Lounge',
    discount: 'FLAT ₹100 OFF',
    discountAmount: 'up to ₹70',
    time: '36 mins',
    rating: 3.2,
    distance: '7.5 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597',
  },
  {
    id: 4,
    name: 'Neel Kamal Veg Fami...',
    discount: 'FLAT ₹50 OFF',
    rating: 1.2,
    discountAmount: 'up to ₹70',
    time: '19 mins',
    distance: '1 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yq7lqeehl9dsjjsogv5g',
  },
  {
    id: 5,
    name: 'Belgian Waffle',
    discount: '30% OFF',
    discountAmount: 'up to ₹75',
    time: '15 mins',
    distance: '1 km',
    rating: 2.2,
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11',
  },
  {
    id: 6,
    name: 'A One Bakery',
    discount: '10% OFF',
    discountAmount: 'up to ₹25',
    time: '24 mins',
    rating: 4.2,
    distance: '5 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2c469b5d88f84b7495b9825d06e4bb9b',
  },
  {
    id: 7,
    name: 'Spice Symphony',
    discount: '20% OFF',
    discountAmount: 'up to ₹50',
    time: '22 mins',
    rating: 4.2,
    distance: '6.5 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/e114a4a9-c14b-4666-8ad5-fbe4a6a44af8_532693.JPG',
  },
  {
    id: 8,
    name: 'Crispy Creations',
    discount: '10% OFF',
    discountAmount: 'up to ₹30',
    time: '18 mins',
    distance: '4.2 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/e6705d31-3941-4fb8-a198-fc6e24cdcc36_861682.JPG',
  },
  {
    id: 9,
    name: 'Wow Momo',
    discount: '15% OFF',
    discountAmount: 'up to ₹40',
    time: '28 mins',
    distance: '9 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64fd45fd9f44c1737bc446e470bed666',
  },
  {
    id: 10,
    name: 'Pasta Fresca',
    discount: '25% OFF',
    discountAmount: 'up to ₹60',
    time: '35 mins',
    distance: '7.8 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c583ca6ce40b426797a78ae2ac91f2ec',
  },
  {
    id: 11,
    name: 'Burger Mania',
    rating: 4.9,
    discount: '30% OFF',
    discountAmount: 'up to ₹70',
    time: '20 mins',
    distance: '3.5 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/df3122a3d49482073a839f47d0ae4281',
  },
  {
    id: 12,
    name: 'Sushi Delight',
    discount: '30% OFF',
    discountAmount: 'up to ₹70',
    rating: 4.9,
    time: '40 mins',
    distance: '11 km',
    imageUrl:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/1a55b465-5808-4201-a939-49540abae3d7_322633.JPG',
  },
];

const RecommendedList = () => {
  const { styles } = useStyles(cardStyles);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <FlatList
        numColumns={Math.ceil(recommendedListData?.length / 2)}
        data={recommendedListData}
        renderItem={({ item }) => {
          return (
            <ScalePress style={styles.itemContainer} onPress={() => {}}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.itemImage}
                />
                {item?.discount && (
                  <View style={styles.discountContainer}>
                    <CustomText
                      color={Colors.background}
                      fontFamily="Okra-Bold"
                    >
                      {item.discount}
                    </CustomText>
                    {item.discountAmount && (
                      <CustomText
                        style={{ lineHeight: 11 }}
                        color={Colors.background}
                        fontSize={9}
                        fontFamily="Okra-Medium"
                      >
                        {item.discountAmount}
                      </CustomText>
                    )}
                  </View>
                )}

                <TouchableOpacity style={styles.bookmarkIcon}>
                  <Image
                    source={require('@assets/icons/bookmark.png')}
                    style={styles.bookmarkIconImage}
                  />
                </TouchableOpacity>

                <CustomGradient position="bottom" />
              </View>
              <View style={styles.itemInfo}>
                <CustomText
                  fontSize={10}
                  color={Colors.text}
                  fontFamily="Okra-Medium"
                  numberOfLines={1}
                >
                  {item.name}
                </CustomText>
                <View style={styles.flexRow}>
                  <Image
                    source={require('@assets/icons/clock.png')}
                    style={styles.clockIcon}
                  />
                  <CustomText
                    fontFamily="Okra-Medium"
                    color={Colors.lightText}
                    numberOfLines={1}
                    fontSize={9}
                  >
                    {item.time} • {item.distance}
                  </CustomText>
                </View>
              </View>
            </ScalePress>
          );
        }}
        scrollEnabled={false}
        keyExtractor={item => item.id?.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        style={styles.recommendedContainer}
      />
    </ScrollView>
  );
};

export default RecommendedList;
