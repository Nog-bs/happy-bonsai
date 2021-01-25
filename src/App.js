// MODULES
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// GLOBALSTYLES
import GlobalStyles from "./GlobalStyles";

// RENDERED PAGES
import { LoginPage } from "./pages";

const App = () => {
  return (
    <Router>
      {/* GLOBALSTYLES */}
      <GlobalStyles />
      <Switch>
        {/* LOGIN */}
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default App;
