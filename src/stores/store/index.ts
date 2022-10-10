import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER, persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from 'stores/reducers'
import { api } from 'services/api';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const isDev = process.env.NODE_ENV !== 'production'

const persistConfig = {
	key: 'root',	// 储存的标识名
	storage: AsyncStorage,	// 储存方式
	whitelist: ['theme'], 	//白名单 模块参与缓存
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = (getDefaultMiddleware: any) => {
	const middlewareList = [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER],
			},
		}),
		thunk,
		api.middleware
	]
	if(__DEV__){
		const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
		return [...middlewareList, reduxImmutableStateInvariant, logger];
	}
	return middlewareList
}

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => middlewares(getDefaultMiddleware)
})

const persistor = persistStore(store)

// 监听焦点、网络通断、组件可视性变化、其他事件等
setupListeners(store.dispatch)
export { store, persistor }