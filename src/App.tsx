import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';

import { CheckOut, Home } from './components/pages';
import { NavigationBar } from './components';

const BASE_ROUTE = '/my-vacation-home';

// const routes = [
//   {
//     component: Home,
//     path: BASE_ROUTE
//   },
//   {
//     component: CheckOut,
//     path: `${BASE_ROUTE}/check-out`
//   }
// ]

function App() {
  const location = useLocation();

  return (
    <NavigationBar>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path={BASE_ROUTE} component={Home} exact />
          <Route path={`${BASE_ROUTE}/check-out`} component={CheckOut} />
        </Switch>
      </AnimatePresence>
    </NavigationBar>
  );
}

export default App;
