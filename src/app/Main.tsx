/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";
import _ from "lodash";

import { RootState } from "app/rootReducer";
import { routes } from "app/routes";
import { ThemeProvider } from "styled-components";
import { ErrorBoundary } from "components/ErrorBoundary";
import { GlobalStyle } from "styles/GlobalStyles";
import { TGlobalThemeObject } from "typings/misc";


export const Main = () => {
	const theme = useSelector<RootState, TGlobalThemeObject>(state => state.misc.theme);

	return (
		<
			>
			<GlobalStyle theme={theme} />

			<Router>
				<ThemeProvider theme={theme}>
					<Switch>
						{routes.map((route, index) => {
							return <Route
								key={index}
								path={route.path}
								exact={route.exact}
							>
								<ErrorBoundary>
									<route.main />
								</ErrorBoundary>
							</Route>
						})}
					</Switch>
				</ThemeProvider>
			</Router>
		</>
	);
};
