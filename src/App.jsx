import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'

function App() {

  const isAuthenticated = true
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' Component={Signin} />
          <Route path='/cadastro' Component={Signup} />
          {isAuthenticated ?
            (
              <>
                <Route path='/' Component={Home} />
              </>
            )
            : (
              <>
                <Route path='*' element={<Navigate replace to='/login' />} />
              </>              
            )
          }
        </Routes>
      </Router>
    </>
  )
}
export default App