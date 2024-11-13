import { FC } from 'react';
import { SharedStateProvider } from '@utils/SharedContext';
import UserBottomTabs from './UserBottomTabs';

const AnimatedTabs: FC = () => {
  return (
    <SharedStateProvider>
      <UserBottomTabs />
    </SharedStateProvider>
  );
};

export default AnimatedTabs;
