import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';

import { CheckOut, Home } from './components/pages';

function App() {
  const location = useLocation();

  return (
    <CssBaseline>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundImage:
            'linear-gradient(to bottom, #374364, #364a68, #37506b, #39566e, #3c5c70, #2e6576, #1e6e78, #167675, #27805f, #59863b, #8f8417, #ca761b)'
        }}
        maxWidth="md"
      >
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/my-vacation-home" component={Home} exact />
            <Route path="/my-vacation-home/check-out" component={CheckOut} />
          </Switch>
        </AnimatePresence>
      </Container>
    </CssBaseline>
  );
}

export default App;
