import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMiscState, TGlobalThemeObject } from "typings/misc";
import { darkTheme, defaultTheme } from "styles/colorPalette";
import { AppThunk } from "app/store";

const miscSlice = createSlice({
	name: "misc",
	initialState: {
		theme:
			localStorage.getItem("theme") === "dark" ? darkTheme : defaultTheme,
	} as TMiscState,
	reducers: {
		setThemeType(
			state,
			action: PayloadAction<{ type: TGlobalThemeObject["type"] }>
		) {
			const { type } = action.payload;

			if (type === "dark") state.theme = darkTheme;
			else state.theme = defaultTheme;
		},
	},
});

export const { setThemeType } = miscSlice.actions;
export default miscSlice.reducer;

export const setTheme = ({
	type,
}: {
	type: TGlobalThemeObject["type"];
}): AppThunk => async dispatch => {
	localStorage.setItem("theme", type);
	dispatch(setThemeType({ type }));
};
