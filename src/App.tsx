import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ListingPage, ViewPage } from './views';
import { Footer } from './components'

function App() {
  return (
    <Router>
        <Switch>
            <Route path={'/'} exact={true}><Redirect to="/surveys" /></Route>
            <Route path={'/surveys'} exact={true} component={ListingPage} />
            <Route path={'/surveys/:id'} component={ViewPage} />
        </Switch>
        <Footer>&copy; {new Date().getFullYear()} Goat Surveys</Footer>
    </Router>
  );
}

export default App;
