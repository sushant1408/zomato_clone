import { useContext } from 'react';
import { SharedStateContext } from './SharedContext';

export const useSharedState = () => {
  const context = useContext(SharedStateContext);

  if (context === undefined) {
    throw new Error('useSharedState must be within SharedStateProvider');
  }

  return context;
};
