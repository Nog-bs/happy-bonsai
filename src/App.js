// MODULES
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// GLOBALSTYLES
import GlobalStyles from "./GlobalStyles";

// RENDERED PAGES
import { SignInPage, SignUpPage } from "./pages";

const App = () => {
  return (
    <Router>
      {/* GLOBALSTYLES */}
      <GlobalStyles />
      <Switch>
        {/* LOGIN */}
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
};

export default App;
