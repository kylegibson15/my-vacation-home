import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

import {
  CheckOut,
  Contact,
  Entertainment,
  Home,
  Fireplace,
  GeneralInfo,
  Kitchen,
  Parking
} from './components/pages';
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
          <Route component={Parking} path={`${BASE_ROUTE}/parking`} />
          <Route component={Contact} path={`${BASE_ROUTE}/contact`} />
          <Route component={GeneralInfo} path={`${BASE_ROUTE}/general`} />
          <Route component={Kitchen} path={`${BASE_ROUTE}/kitchen`} />
          <Route
            component={Entertainment}
            path={`${BASE_ROUTE}/entertainment`}
          />
        </Switch>
      </AnimatePresence>
    </NavigationBar>
  );
}

export default App;
