import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

import { CheckOut, Home, Fireplace } from './components/pages';
import { NavigationBar } from './components';

const BASE_ROUTE = '/my-vacation-home';

function App() {
  const location = useLocation();

  return (
    <NavigationBar>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route component={Home} exact path={BASE_ROUTE} />
          <Route component={CheckOut} path={`${BASE_ROUTE}/check-out`} />
          <Route component={Fireplace} path={`${BASE_ROUTE}/fireplace`} />
        </Switch>
      </AnimatePresence>
    </NavigationBar>
  );
}

export default App;
