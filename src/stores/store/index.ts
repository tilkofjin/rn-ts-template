import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from 'stores/reducers'

let middlewares = [thunk];
const persistConfig = {
  key: 'root',	// 储存的标识名
  storage: AsyncStorage,	// 储存方式
	whitelist: ['persistReducer'] 	//白名单 模块参与缓存
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const isDev = process.env.NODE_ENV !== 'production'
if (isDev) {
	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
	middlewares = [...middlewares, reduxImmutableStateInvariant, logger];
}

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>	getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER],
		},
	}).concat(middlewares)
})


export default store