import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Page } from '@shopify/polaris';
import { ListingPage, ViewPage } from './views';
import { Footer } from './components';
import constants from './store/constants';

const App: React.FC = () => {
  return (
    <Page>
      <Router>
          <Switch>
              <Route path={constants.LISTING_ROUTE} exact={true} component={ListingPage} />
              <Route path={constants.VIEW_ROUTE} component={ViewPage} />
              <Route path={'/'}><Redirect to={constants.LISTING_ROUTE} /></Route>
          </Switch>
      </Router>
      <Footer>&copy; {new Date().getFullYear()} Goat Surveys</Footer>
    </Page>
  );
}

export default App;
