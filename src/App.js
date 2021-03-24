import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signup, Signin } from './pages';
import * as ROUTES from './constants/routes';

const App = () => {
    return (
        <Router>
            <Route exact path={ROUTES.HOME}>
                <Home />
            </Route>
            <Route exact path={ROUTES.BROWSE}>
                <Browse />
            </Route>
            <Route exact path={ROUTES.SING_IN}>
                <Signin />
            </Route>
            <Route exact path={ROUTES.SING_UP}>
                <Signup />
            </Route>
        </Router>
    );
};

export default App;
