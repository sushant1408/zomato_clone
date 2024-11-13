import { View } from 'react-native';
import { FC } from 'react';

import LocationHeader from './LocationHeader';
import SearchBar from './SearchBar';

const HeaderSection: FC = () => {
  return (
    <View>
      <LocationHeader />
      <SearchBar />
    </View>
  );
};

export default HeaderSection;
