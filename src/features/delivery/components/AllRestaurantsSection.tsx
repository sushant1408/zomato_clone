import { View, Text } from 'react-native';
import React from 'react';

export const restaurantItemsData = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella and basil.',
    price: 109,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/dpventcrozvfni0lqb10',
    isCustomizable: true,
    isVeg: true,
    customizationOptions: [
      {
        type: 'Extra Toppings',
        options: [
          { name: 'Olives', price: 5 },
          { name: 'Mushrooms', price: 5 },
          { name: 'Pepperoni', price: 5 },
        ],
      },
      {
        type: 'Crust Options',
        options: [
          { name: 'Thin Crust', price: 30 },
          { name: 'Cheese Burst', price: 45 },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    description: 'Loaded with pepperoni slices and cheese.',
    price: 229,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/9/19/e1e9ebad-6ef4-45d2-abf2-136048e5092e_05ab7e4a-ffa5-48c9-9c2e-8bd177206d55.jpeg',
    isCustomizable: true,
    isVeg: false,
    customizationOptions: [
      {
        type: 'Size',
        required: true,
        options: [
          { name: 'Small', price: 0 },
          { name: 'Medium', price: 40 },
          { name: 'Large', price: 60 },
        ],
      },
      {
        type: 'Extra Toppings',
        options: [
          { name: 'Extra Cheese', price: 30 },
          { name: 'Jalapenos', price: 39 },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Butter Chicken Biryani',
    description: 'Aromatic biryani with tender butter chicken.',
    price: 250,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/b461d252b9bfa267e5faa89a5284853f',
    isCustomizable: true,
    isVeg: false,
    customizationOptions: [
      {
        type: 'Spice Level',
        required: true,
        options: [
          { name: 'Mild', price: 0 },
          { name: 'Medium', price: 0 },
          { name: 'Spicy', price: 0 },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Paneer Biryani',
    description: 'A vegetarian biryani with marinated paneer.',
    price: 170,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/286ebc9e01804994376af9feb5474d03',
    isCustomizable: false,
    isVeg: true,
  },
  {
    id: '5',
    name: 'Cheesecake',
    description: 'Rich and creamy New York-style cheesecake.',
    price: 179,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/30/cf9f870b-ebc5-42cf-8067-7a21018e5513_115d452e-f1bc-4d0a-902a-31d4e134a3bd.jpeg',
    isCustomizable: true,
    isVeg: true,
    customizationOptions: [
      {
        type: 'Toppings',
        options: [
          { name: 'Strawberries', price: 39 },
          { name: 'Blueberries', price: 49 },
          { name: 'Whipped Cream', price: 59 },
        ],
      },
    ],
  },
  {
    id: '6',
    name: 'Chocolate Brownie',
    description: 'Warm, gooey chocolate brownie.',
    price: 45,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/Swiggy-Dash/jmin882krukbjqi5qcjk',
    isCustomizable: false,
    isVeg: true,
  },
  {
    id: '7',
    name: 'Classic Burger',
    description: 'Potato patty, cheese, lettuce, and tomato on a bun.',
    price: 90,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f7390f87e5b2abb968715dc59f2bf8f3',
    isCustomizable: true,
    isVeg: true,
    customizationOptions: [
      {
        type: 'Add-ons',
        options: [
          { name: 'Extra Cheese', price: 15 },
          { name: 'Bacon', price: 20 },
          { name: 'Avocado', price: 5 },
        ],
      },
    ],
  },
  {
    id: '8',
    name: 'Vegan Salad',
    description: 'Fresh greens with a variety of veggies.',
    price: 120,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/72d1b879f7df5f9aa6cec68a05b8d63f',
    isCustomizable: false,
    isVeg: true,
  },
  {
    id: '9',
    name: 'Tandoori Chicken',
    description: 'Grilled chicken marinated in spices.',
    price: 120,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/c00bd9cd2bf28b999771d66bd836aace',
    isCustomizable: false,
    isVeg: false,
  },
  {
    id: '10',
    name: 'Veggie Wrap',
    description: 'Healthy wrap with fresh vegetables.',
    price: 70,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/9/27/82512e55-bdec-4717-bf93-d432aa55cc65_c6c23d67-6dc9-4b33-adbe-a0d99be38131.jpg',
    isCustomizable: true,
    isVeg: true,
    customizationOptions: [
      {
        type: 'Sauces',
        options: [
          { name: 'Hummus', price: 20 },
          { name: 'Ranch', price: 20 },
        ],
      },
    ],
  },
  {
    id: '11',
    name: 'Pasta Primavera',
    description: 'Pasta with fresh vegetables in a light sauce.',
    price: 120,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/7/26/1b3413ac-2014-4c68-bdaa-11b98df74625_b2e062fc-75b8-4e8e-bbd8-794f9396c768.jpg',
    isCustomizable: false,
    isVeg: true,
  },
  {
    id: '12',
    name: 'Chicken Caesar Salad',
    description: 'Romaine lettuce with Caesar dressing and chicken.',
    price: 200,
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/10/15/84c3a8bd-4e6f-40ea-810a-b0a3adfefa56_2f3299b6-12aa-444b-b47f-e0e5821083de.jpg_compressed',
    isCustomizable: true,
    isVeg: false,
    customizationOptions: [
      {
        type: 'Add-ons',
        options: [
          { name: 'Parmesan Cheese', price: 20 },
          { name: 'Croutons', price: 15 },
        ],
      },
    ],
  },
];

const AllRestaurantsSection = () => {
  return (
    <View>
      <Text>AllRestaurantsSection</Text>
    </View>
  );
};

export default AllRestaurantsSection;
