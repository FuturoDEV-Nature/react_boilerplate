import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'

function App() {

  const isAuthenticated = true

  function loginRedirect(componente) {
    if (isAuthenticated) {
      return <Navigate to='/' replace />
    }

    return componente
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={loginRedirect(<Signin />)} />
          <Route path='/cadastro' element={loginRedirect(<Signup />)} />          

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