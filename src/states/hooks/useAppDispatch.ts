import { useDispatch } from 'react-redux';

import { AppDispatch } from '@states/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
