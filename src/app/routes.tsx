import React from "react";
// import { DashboardOutlined, PieChartOutlined } from "@ant-design/icons";
import { TIgRoute } from "typings/misc";

export const routes: Array<TIgRoute> = [
	{
		path: "/",
		exact: true,
		sidebarKey: "dashboard",
		sidebar: "Dashboard",
		icon: <></>,
		main: () => <></>,
		subMenu: true,
		parent: null,
		authorize: ["engineer", "admin"],
		navigationBar: ["Dashboard", "Scenarios"],
	},
];
