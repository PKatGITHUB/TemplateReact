import React, { ReactNode } from "react";
import { TUserFromGetAllUsersAPI, TUser } from "typings/auth";

declare type TMiscState = {
	theme: TGlobalThemeObject;
};

declare type TServiceIdToNameMap = { [serviceId: string]: string };

declare type TGlobalThemeObject = {
	type: "light" | "dark";
	primary: string;
	secondary: string;
	bgPrimary: string;
	bgSecondary: string;
	bgHighlightColor: string;
	bgTooltip: string;
	bgGradientLight: string;
	bgGradientDark: string;
	fgPrimary: string;
	fgSecondary: string;
	fgGradientExtraLight: string;
	fgGradientLight: string;
	fgGradientDark: string;
	borderPrimary: string;
	borderSecondary: string;
	borderTooltip: string;
	chatOpsBgPrimary: string;
	chatOpsMessageBg: string;
	chatOpsTextPrimary: string;
	messageSentBg: string;
	red: string;
	yellow: string;
	green: string;
	highlightColorPrimary: string;
	highlightColorGradientDark: string;
	highlightColorGradientLight: string;
	textPrimary: string;
	textSecondary: string;
	textTertiary: string;
	textInvertPrimary: string;
	textChatOpsText: string;
	textLight: string;
	textExtraLight: string;
	textBoldTitle: string;
	textCardTitle: string;
	dividerPrimary: string;
	graphRelationshipPrimary: string;
	linkBlue: string;
	applyFilterButtonColor: string;
	greyLight: string;
	greyDim: string;
	defaultHoverColor: string;
	black: string;
};

declare type TApiErrorResponse = {
	error: any;
	isError: boolean;
	authorizationError?: true;
};

declare type TAntdOption = {
	value: string;
	label: ReactNode;
	labelname?: string;
};

declare type TIgRoute = {
	path: string;
	exact?: boolean;
	sidebarKey: string;
	sidebar: string;
	icon: any;
	main: () => any;
	hide?: boolean;
	subMenu?: boolean;
	parent: string | null;
	secondsub?: boolean;
	navigationBar?: any;
	authorize: Array<string>;
};
