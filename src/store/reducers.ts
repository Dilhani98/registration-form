// src/store/reducers.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegistrationState {
  name: string;
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
}

const initialState: RegistrationState = {
  name: '',
  email: '',
  password: '',
  loading: false,
  error: null,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetForm: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setLoading,
  setError,
  resetForm,
} = registrationSlice.actions;

export default registrationSlice.reducer;
