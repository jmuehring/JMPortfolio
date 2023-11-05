

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  appState: string;
  topbarTitle: string;
};

const initialState: AppState = {
  appState: '',
  topbarTitle: 'About Me',
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
    setTopbarTitle: (state, action: PayloadAction<string>) => {
      state.topbarTitle = action.payload;
    },
  },
});

export const { setAppState, setTopbarTitle } = appStateSlice.actions;

export default appStateSlice.reducer;
