import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'

function App() {

  return (
    <>
      <Router> {/* switch */}
        <Routes>
          <Route path='/' Component={Signin} />
          <Route path='/login' Component={Signin} />
          <Route path='/cadastro' Component={Signup} />
            {/*             


         ROTAS
         localhost/home -> globo.com/home

          - rota /home pages/Home
          - rota / pages/Home     
          - rota /configuracoes pages/Configuracoes
          - rota /login pages/Login              
         */}
        </Routes>
      </Router>
    </>
  )
}

export default App
