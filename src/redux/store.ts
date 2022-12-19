
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './filters/filters';
import modalReducer from './modal/modal'

const rootReducer = combineReducers({
    // [goodsApi.reducerPath]: goodsApi.reducer,
	filter: filterReducer,
	modal: modalReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => 
			getDefaultMiddleware()
				// .concat(goodsApi.middleware)
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];