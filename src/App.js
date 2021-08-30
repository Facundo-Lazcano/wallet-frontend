import HomePage from './pages/HomePage'
import { Route, Router } from 'react-router-dom'
import LoginRegisterPage from './pages/LoginRegisterPage'
import history from './history'
import AddOrEditMovements from './pages/AddOrEditMovement'

function App () {
  return (
    <Router history={history}>
      <Route path='/' component={HomePage} exact />
      <Route path='/login' component={LoginRegisterPage} exact />
      <Route
        path='/register'
        render={props => <LoginRegisterPage {...props} isRegister={true} />}
        exact
      />
      <Route
        path='/add/:type'
        render={props => <AddOrEditMovements {...props} Add={true} />}
      />
      <Route
        path='/:id/edit'
        render={props => <AddOrEditMovements {...props} Add={false} />}
      />
    </Router>
  )
}

export default App
