import { createSlice } from '@reduxjs/toolkit'
import { ColorSchemeName } from 'react-native'

interface ThemeState {
  theme?: ColorSchemeName,
  darkMode: boolean | null
}

const initialState: ThemeState = {
  theme: null, darkMode: null
}

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode
      }
    },
    setDefaultTheme: (state, { payload: { theme, darkMode } }) => {
      if (!state.theme) {
        state.theme = theme
        state.darkMode = darkMode
      }
    },
  },
})

export const { changeTheme, setDefaultTheme } = slice.actions

export default slice.reducer