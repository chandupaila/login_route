import {Switch, Route} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import LoginFrom from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginFrom} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
)
export default App
