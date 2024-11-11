import { FC } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type IconProps = {
  color?: string;
  size: number;
  name: string;
  iconFamily: 'MaterialCommunityIcons' | 'MaterialIcons' | 'Ionicons';
};

const Icon: FC<IconProps> = ({ iconFamily, name, size, color }) => {
  return (
    <>
      {iconFamily === 'Ionicons' && (
        <Ionicons name={name} size={size} color={color} />
      )}
      {iconFamily === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons name={name} size={size} color={color} />
      )}
      {iconFamily === 'MaterialIcons' && (
        <MaterialIcons name={name} size={size} color={color} />
      )}
    </>
  );
};

export default Icon;
