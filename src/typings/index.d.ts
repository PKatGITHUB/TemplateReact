import React from "react";
import { TTimerangeSliceState } from "typings/timerange";
import { TScenario } from "typings/scenarios";
import { RootState } from "app/rootReducer";
import { TGlobalThemeObject } from "typings/misc";
// declare type State = TTimerangeSliceState & TScenario[];

declare type RootState = RootState;

declare module "styled-components" {
	export interface DefaultTheme extends TGlobalThemeObject {}
}
