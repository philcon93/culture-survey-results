import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Page } from '@shopify/polaris';
import { DashboardPage, ListingPage, ViewPage } from './views';
import { Footer, NavBar } from './components';
import constants from './store/constants';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Page>
        <Switch>
            <Route path={constants.LISTING_ROUTE} exact={true} component={ListingPage} />
            <Route path={constants.VIEW_ROUTE} component={ViewPage} />
            <Route path={constants.DASHBOARD_ROUTE} exact={true} component={DashboardPage} />
            <Redirect to={constants.DASHBOARD_ROUTE} />
        </Switch>
        <Footer>&copy; {new Date().getFullYear()} {constants.COMPANY_NAME}</Footer>
      </Page>
    </Router>
  );
}

export default App;
