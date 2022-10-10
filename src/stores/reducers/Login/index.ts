import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { navigate } from 'navigation/utils';

interface LoginState {
  username: string;
  password: string;
  authentication: boolean;
  token?: string;
}

const initialState: LoginState = {
  username: '',
  password: '',
  authentication: false
}

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      if (state.username === 'user' && state.password === 'password') {
        state.authentication = true
        state.token = '12456798'
        navigate('Modal', { userName: 'Lucy' })
      } else {
        state.authentication = false
      }
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
})

export const { login, setUsername, setPassword } = slice.actions

export default slice.reducer