// MODULES
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// GLOBALSTYLES
import GlobalStyles from "./GlobalStyles";

// RENDERED PAGES
import {
    SignUpPage,
    SignInPage,
    BonsaiBoard,
    ForgotPage,
    UpdateProfile,
} from "./pages";

// COMPONENTS
import { PrivateRoute } from "./components";

// AUTHENTICATION
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
    return (
        <AuthProvider>
            <GlobalStyles />
            <Router>
                <Switch>
                    {/* Pages that I want users to be on by default */}
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/login" component={SignInPage} />
                    <Route path="/forgot" component={ForgotPage} />
                    {/* Users can access the component only if they have logged in */}
                    <PrivateRoute exact path="/" component={BonsaiBoard} />
                    <PrivateRoute path="/update" component={UpdateProfile} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
