import { RFValue } from 'react-native-responsive-fontsize';
import { createStyleSheet } from 'react-native-unistyles';
import { Platform } from 'react-native';

import { Colors, isBannerHeight } from '@unistyles/theme';

export const deliveryStyles = createStyleSheet(
  ({ colors, device, border }) => ({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    topHidingContainer: {
      marginTop: isBannerHeight,
      backgroundColor: colors.background,
    },
    topHeader: {
      zIndex: 1,
      alignSelf: 'center',
      paddingHorizontal: 10,
    },
    animatedText: {
      fontSize: RFValue(10.5),
      fontFamily: 'Okra-Bold',
    },
    animatedSubText: {
      fontSize: RFValue(7),
      lineHeight: 9,
      fontFamily: 'Okra-Bold',
    },
    exploreContainer: {
      marginVertical: 10,
    },
    lottieContainer: {
      width: device.width,
      backgroundColor: '#CC152D',
      height:
        Platform.OS === 'android' ? device.height * 0.54 : device.height * 0.6,
      justifyContent: 'flex-end',
      position: 'absolute',
      zIndex: -3,
      alignSelf: 'center',
    },
    lottie: {
      width: '100%',
      bottom: -1,
      height: device.width,
    },
    rollingText: {
      opacity: 0.6,
    },
    flexRowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flexRowGap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    translation: {
      paddingVertical: 2,
      paddingHorizontal: 5,
      borderRadius: border.md,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    translationIcon: {
      resizeMode: 'contain',
      width: 32,
      height: 32,
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: border.full,
      resizeMode: 'contain',
    },
    goldenCircle: {
      width: 50,
      position: 'absolute',
      zIndex: 1,
      alignSelf: 'center',
      height: 50,
      borderRadius: border.full,
    },
    profileAvatar: {
      width: 40,
      marginHorizontal: 5,
      height: 40,
      borderRadius: border.full,
      justifyContent: 'center',
      alignItems: 'center',
    },
    vegMode: {
      width: '15%',
      top: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    switch: {
      width: 35,
      height: 35,
      resizeMode: 'contain',
      bottom: 2,
    },
    searchInputContainer: {
      backgroundColor: '#F3F4F7',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.7,
      elevation: 5,
      shadowRadius: 6,
      shadowColor: colors.background,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 12,
      width: '88%',
      borderWidth: 0.6,
      borderColor: colors.tertiary,
      paddingHorizontal: 10,
    },
    textContainer: {
      width: '80%',
      paddingLeft: 10,
      height: 48,
    },
    divider: {
      width: 1,
      height: 24,
      backgroundColor: '#DDDDDD',
      marginHorizontal: 10,
    },
    padding: {
      padding: 10,
    },
    flexRowCenter: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    leftTab: (isActive: boolean) => ({
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 5,
      paddingHorizontal: 10,
      backgroundColor: isActive ? colors.tertiary : colors.background,
      borderWidth: 1,
      borderColor: isActive ? colors.active : colors.border,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    }),
    rightTab: (isActive: boolean) => ({
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
      padding: 5,
      paddingHorizontal: 10,
      flexDirection: 'row',
      backgroundColor: isActive ? colors.tertiary : colors.background,
      borderWidth: 1,
      borderColor: isActive ? colors.active : colors.border,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    }),
  }),
);

export const restaurantStyles = createStyleSheet(
  ({ device, colors, border }) => ({
    listContainer: {
      paddingBottom: 300,
    },
    shadowBottom: {
      shadowOffset: { width: 1, height: 18 },
      shadowOpacity: 0.08,
      elevation: 5,
      shadowRadius: 10,
      shadowColor: colors.dark,
      backgroundColor: colors.background,
    },
    card: {
      backgroundColor: colors.background,
      borderRadius: border.lg,
      marginBottom: 25,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.2,
      elevation: 5,
      shadowRadius: 10,
      shadowColor: colors.dark,
      margin: 10,
    },
    image: {
      borderTopLeftRadius: border.lg,
      borderTopRightRadius: border.lg,
      width: '100%',
      height: device.height * 0.3,
      resizeMode: 'cover',
    },
    info: {
      padding: 10,
    },
    name: {
      marginBottom: 5,
    },
    details: {
      opacity: 0.7,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textPart: {
      width: '70%',
    },
    backToTopButton: {
      position: 'absolute',
      alignSelf: 'center',
      top: device.height * 0.055,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      backgroundColor: 'black',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      zIndex: 999,
    },
  }),
);

export const shadowStyle = {
  backgroundColor: Colors.background,
  shadowOffset: { width: 1, height: 16 },
  shadowOpacity: 0.4,
  elevation: 5,
  shadowRadius: 6,
  shadowColor: Colors.border,
};

export const restaurantHeaderStyles = createStyleSheet(
  ({ device, colors, border }) => ({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 5,
      ...shadowStyle,
    },
    flexRowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flexRowGap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      opacity: 0.5,
    },
    sortingContainer: {
      paddingVertical: 2,
      zIndex: 2,
      ...shadowStyle,
    },
    mainPadding: {
      paddingHorizontal: 10,
    },
    scrollContainer: {
      backgroundColor: colors.background,
      paddingBottom: 100,
    },
  }),
);

export const searchStyles = createStyleSheet(({ device, colors, border }) => ({
  container: {
    backgroundColor: colors.background,
    shadowOffset: { width: 1, height: -4 },
    shadowOpacity: 0.1,
    elevation: 5,
    shadowRadius: 5,
    bottom: Platform.OS == 'android' ? 22 : 0,
    zIndex: 22,
    shadowColor: colors.secondary,
  },
  searchInputContainer: {
    backgroundColor: '#F3F4F7',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 14,
    shadowColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    width: '72%',
    borderWidth: 0.6,
    borderColor: colors.tertiary,
    paddingHorizontal: 10,
  },
  textContainer: {
    width: '80%',
    paddingLeft: 10,
    height: 48,
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },
  padding: {
    padding: 10,
  },
  rollingText: {
    opacity: 0.6,
  },
  flexRowGap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    height: 48,
  },
  offerContainer: {
    padding: 15,
    paddingBottom: Platform.OS == 'ios' ? 25 : 15,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  offerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerText: {
    color: '#fff',
    fontSize: RFValue(12),
    fontFamily: 'Okra-Bold',
    marginRight: 5,
    textAlign: 'center',
  },
  offerSubtitle: {
    color: '#fff',
    fontSize: RFValue(10),
    fontFamily: 'Okra-Medium',
    textAlign: 'center',
    marginTop: 5,
  },
  animatedCount: {
    fontSize: RFValue(12),
    color: 'white',
    fontFamily: 'Okra-Bold',
    margin: 0,
  },
  confetti: {
    width: '100%',
    height: 400,
    position: 'absolute',
  },
}));
