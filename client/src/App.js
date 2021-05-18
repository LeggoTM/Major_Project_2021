import { Switch, Route } from "react-router-dom";

import { Signin, Signup } from "./pages";

const App = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <Signin />
            </Route>
            <Route path='/register'>
                <Signup />
            </Route>
        </Switch>
    );
};

export default App;
