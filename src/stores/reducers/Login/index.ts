import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { navigate } from 'navigation/utils';

interface LoginState {
  username: string;
  password: string;
  authentication: boolean;
  token?: string;
}

const initialState: LoginState = {
  token: '',
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
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token =  action.payload
    }
  },
})

export const { login, setUsername, setPassword, setToken } = slice.actions

export default slice.reducer