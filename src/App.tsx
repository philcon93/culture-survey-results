import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Page } from './components';
import { ListingPage, ViewPage } from './views';

function App() {
  return (
    <Router>
        <Switch>
            <Page>
              <Route path={'/'} exact={true}><Redirect to="/surveys" /></Route>
              <Route path={'/surveys'} exact={true} component={ListingPage} />
              <Route path={'/surveys/:id'} component={ViewPage} />
            </Page>
        </Switch>
    </Router>
  );
}

export default App;
