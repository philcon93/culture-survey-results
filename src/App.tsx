import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Page } from './components';
import { ListingPage, ViewPage } from './views';

function App() {
  return (
    <Router>
        <Switch>
            <Page>
              <Route path={'/'} exact={true} component={ListingPage} />
              <Route path={'/:id'} component={ViewPage} />
            </Page>
        </Switch>
    </Router>
  );
}

export default App;
