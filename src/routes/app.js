import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../pages/Home';
import LoginPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';

import AuthRoute from '../utils/auth.utils';
import { AuthPage } from './auth';

const App = () => {
    return (
        <>
            <ToastContainer />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/signup' component={SignUpPage} />
                    <AuthRoute redirectTo="/login" path="/" component={AuthPage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;