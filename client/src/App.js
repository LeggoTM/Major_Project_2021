import { Switch, Route } from "react-router-dom";

import { Signin } from "./pages";

const App = () => {
    return (
        <Switch>
            <Route path='/'>
                <Signin />
            </Route>
        </Switch>
    );
};

export default App;
