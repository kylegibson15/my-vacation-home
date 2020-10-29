import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container, useTheme } from '@material-ui/core'

import { About } from './pages/About'
import { Home } from './pages/Home'

const App: FC = () => {
  const theme = useTheme()

  return (
    <CssBaseline>
      <BrowserRouter>
        <Container
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: theme.palette.common.white,
          }}
        >
          <Switch>
            <Route path="/my-vacation-home" component={Home} exact />
            <Route path="/my-vacation-home/about" component={About} />
          </Switch>
        </Container>
      </BrowserRouter>
    </CssBaseline>
  )
}

export default App
