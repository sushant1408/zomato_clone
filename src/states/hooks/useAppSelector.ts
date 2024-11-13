import { useSelector } from 'react-redux';

import { RootState } from '@states/store';

export const useAppSelector = useSelector.withTypes<RootState>();
