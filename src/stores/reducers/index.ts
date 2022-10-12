import { combineReducers } from 'redux';
import { api } from 'services/api';
import login from './Login';
import theme from './Theme'
import posts from './Posts'

//Reducer 合并
export default combineReducers({
  theme,
  login,
  posts,
  [api.reducerPath]: api.reducer,
});