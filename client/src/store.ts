import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { State } from './types';

// Redux store starting state

const initialState: State = {
  error: '',
  user: null
};

export const { actions, reducer } = createSlice({
  name: 'store',
  initialState,
  reducers: {}
});

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export default store;
export { useDispatch } from 'react-redux';

// Export a typed version of the useSelector hook
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;
