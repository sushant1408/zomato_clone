import { createStyleSheet } from 'react-native-unistyles';

export const emptyStyles = createStyleSheet(({ colors, device, border }) => ({
  container: (isOnLiveScreen: boolean = false) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isOnLiveScreen ? '#000000' : colors.background,
  }),
  emptyImage: {
    width: device.width * 0.9,
    height: device.height * 0.4,
    resizeMode: 'contain',
  },
}));
