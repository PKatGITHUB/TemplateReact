import { combineReducers } from "@reduxjs/toolkit";
import miscReducer from "features/misc";

const rootReducer = combineReducers({
	misc: miscReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
