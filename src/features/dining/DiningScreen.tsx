import { View, Image } from 'react-native';
import { FC } from 'react';
import { useStyles } from 'react-native-unistyles';

import { emptyStyles } from '@unistyles/emptyStyles';

const DiningScreen: FC = () => {
  const { styles } = useStyles(emptyStyles);

  return (
    <View style={styles.container()}>
      <Image
        source={require('@assets/images/coming_soon3.png')}
        style={styles.emptyImage}
      />
    </View>
  );
};

export default DiningScreen;
