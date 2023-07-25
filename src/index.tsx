import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { Helmet } from "react-helmet";

const render = () => {
	const App = require("./app/App").default;

	const gtmParams = {
		id: "GTM-NX6JTH5",
		dataLayer: {
			"my-custom-value": "value",
		},
		dataLayerName: "customDataLayerName",
	};

	ReactDOM.render(
		<Provider store={store}>
			<Helmet>
				<title>Intelligeni&trade; by Microland&reg;</title>
			</Helmet>
			<App />
		</Provider>,
		document.getElementById("root")
	);
};

render();
if (process.env.NODE_ENV === "development" && (module as any).hot) {
	(module as any).hot.accept("./app/App", render);
}
