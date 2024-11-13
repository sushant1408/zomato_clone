import { createContext, FC, PropsWithChildren } from 'react';
import {
  SharedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type SharedStateContextType = {
  scrollY: SharedValue<number>;
  scrollYGlobal: SharedValue<number>;
  scrollToTop: () => void;
};

export const SharedStateContext = createContext<SharedStateContextType | undefined>(
  undefined,
);

export const SharedStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const scrollY = useSharedValue(0);
  const scrollYGlobal = useSharedValue(0);

  const scrollToTop = () => {
    scrollY.value = withTiming(0, { duration: 300 });
    scrollYGlobal.value = withTiming(0, { duration: 300 });
  };

  return (
    <SharedStateContext.Provider
      value={{
        scrollY,
        scrollYGlobal,
        scrollToTop,
      }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};
