import { PageCustomer } from '@pages/customer';
import { history } from 'sample-components';
import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { PageCustomerDetail } from '@pages/customer-form';

export const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/" component={PageCustomer} />
        <Route exact={true} path="/customer" component={PageCustomer} />
        <Route exact={true} path="/customer/form" component={PageCustomerDetail} />
        <Route exact={true} path="/customer/form/:id" component={PageCustomerDetail} />
        <Redirect from="*" to={'/'} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
