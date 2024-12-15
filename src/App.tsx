import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {
  CheckOut,
  Contact,
  Entertainment,
  Home,
  Fireplace,
  GeneralInfo,
  Kitchen,
  Parking,
  TrashAndRecycling
} from './components/pages';
import { NavigationBar } from './components';

const BASE_ROUTE = '/my-vacation-home';

function App() {
  const location = useLocation();

  return (
    <NavigationBar>
      <Routes location={location} key={location.pathname}>
        <Route path={BASE_ROUTE} element={<Home />} />
        <Route path={`${BASE_ROUTE}/check-out`} element={<CheckOut />} />
        <Route path={`${BASE_ROUTE}/fireplace`} element={<Fireplace />} />
        <Route path={`${BASE_ROUTE}/parking`} element={<Parking />} />
        <Route path={`${BASE_ROUTE}/contact`} element={<Contact />} />
        <Route path={`${BASE_ROUTE}/general`} element={<GeneralInfo />} />
        <Route path={`${BASE_ROUTE}/kitchen`} element={<Kitchen />} />
        <Route
          path={`${BASE_ROUTE}/trash`}
          element={<TrashAndRecycling />}
        />
        <Route
          path={`${BASE_ROUTE}/entertainment`}
          element={<Entertainment />}
        />
      </Routes>
    </NavigationBar>
  );
}

export default App;
