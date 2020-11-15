import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthRoute from '../utils/auth.utils';

import PaymentFormPage from '../pages/PaymentForm'
import CheckOutPage from '../pages/Checkout';
import ForgotPasswordPage from '../pages/ForgotPassword';
import PrivacyPage from '../pages/Privacy';
import ReviewPage from '../pages/Review';
import TermsPage from '../pages/Terms';
import AddressFormPage from '../pages/AddressForm';

export const AuthPage = () => (
    <Switch>
        <Route exact path='/' render={() => <Redirect to="/admin" />} />
        <AuthRoute exact path="/payment-form" component={PaymentFormPage} />
        <AuthRoute path='/checkout' component={CheckOutPage} redirectTo="/login" />
        <AuthRoute path='/forgot-password' component={ForgotPasswordPage} redirectTo="/login" />
        <AuthRoute path='/privacy' component={PrivacyPage} redirectTo="/login" exact />
        <AuthRoute path='/review' component={ReviewPage} redirectTo="/login" />
        <AuthRoute path='/terms' component={TermsPage} redirectTo="/login" />
        <AuthRoute path='/address-form' component={AddressFormPage} redirectTo="/login" />
    </Switch>
)