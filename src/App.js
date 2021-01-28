// MODULES
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// GLOBALSTYLES
import GlobalStyles from "./GlobalStyles";

// RENDERED PAGES
import { SignUpPage, SignInPage, BonsaiBoard, ForgotPage } from "./pages";

// COMPONENTS
import { PrivateRoute } from "./components";

// AUTHENTICATION
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      {/* GLOBALSTYLES */}
      <GlobalStyles />
      {/* GLOBALSTYLES */}
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={BonsaiBoard} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={SignInPage} />
          <Route path="/forgot" component={ForgotPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
