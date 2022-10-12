import { createSlice } from '@reduxjs/toolkit'

interface PostState {
  list: any[];
}

const initialState: PostState = { list: [] }

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload
    }
  },
})

export const { setPosts } = slice.actions

export default slice.reducer