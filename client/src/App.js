import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SingIn from "./components/SingIn/SingIn";
import Chat from "./components/Chat/Chat";

const App = () => (
	<Router>
		<Route path="/" exact component={SingIn} />
		<Route path="/chat" exact component={Chat} />
	</Router>
);

export default App;
