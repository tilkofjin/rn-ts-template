import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostsResponse } from 'services/modules/Login';

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