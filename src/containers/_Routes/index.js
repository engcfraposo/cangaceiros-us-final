import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../components/pages/Home';
import CheckOut from '../../components/pages/CheckOut';
import ForgotPassword from '../../components/pages/ForgotPassword';
import Privacy from '../../components/pages/Privacy';
import Review from '../../components/pages/Review';
import Terms from '../../components/pages/Terms';
import AddressForm from '../../components/pages/AddressForm';
import SignIn from '../../components/pages/SingIn';
import SignOut from '../../components/pages/SingOut';
import PaymentForm from '../../components/pages/PaymentForm'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/SignOut" component={SignOut} />
      <Route exact path="/PaymentForm" component={PaymentForm} />
      <Route exact path="/CheckOut" component={CheckOut} />
      <Route exact path="/ForgotPassword" component={ForgotPassword} />
      <Route exact path="/Privacy" component={Privacy} />
      <Route exact path="/Review" component={Review} />
      <Route exact path="/Terms" component={Terms} />
      <Route exact path="/AddressForm" component={AddressForm} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}