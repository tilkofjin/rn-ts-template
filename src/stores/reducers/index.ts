import { combineReducers } from 'redux';
import { api } from 'services/api';
import login from './Login';
import theme from './Theme'

//Reducer 合并
export default combineReducers({
  theme,
  login,
  [api.reducerPath]: api.reducer,
});