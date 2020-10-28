import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/my-vacation-home" component={Home} exact />
          <Route path="/my-vacation-home/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
