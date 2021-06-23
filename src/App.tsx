import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Page } from '@shopify/polaris';
import { ListingPage, ViewPage } from './views';
import { Footer } from './components';

const App: React.FC = () => {
  return (
    <Page>
      <Router>
          <Switch>
              <Route path={'/'} exact={true}><Redirect to="/surveys" /></Route>
              <Route path={'/surveys'} exact={true} component={ListingPage} />
              <Route path={'/surveys/:id'} component={ViewPage} />
          </Switch>
      </Router>
      <Footer>&copy; {new Date().getFullYear()} Goat Surveys</Footer>
    </Page>
  );
}

export default App;
