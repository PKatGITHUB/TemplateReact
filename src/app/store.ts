/* eslint-disable indent */
import { configureStore, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
// @ts-ignore
import dynamicMiddlewares from "redux-dynamic-middlewares";

import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
	reducer: rootReducer,
	middleware: [
		dynamicMiddlewares,
		...getDefaultMiddleware({
			serializableCheck: false,
		}),
	],
});

if (process.env.NODE_ENV === "development" && (module as any).hot) {
	(module as any).hot.accept("./rootReducer", () => {
		const newRootReducer = require("./rootReducer").default;
		store.replaceReducer(newRootReducer);
	});
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
