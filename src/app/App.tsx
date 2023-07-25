import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Main } from "./Main";

const App = () => {

	return (
		<React.Fragment>
			<React.Fragment>
				<Router>
					<Switch>
						<Main />
					</Switch>
				</Router>
			</React.Fragment>
		</React.Fragment>
	);
};

export default App;
