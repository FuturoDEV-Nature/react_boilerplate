import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import './App.css'
import RoutesComponent from './routes/Routes'

function App() {

  const isAuthenticated = true
  {/* Estrutura de tela quando está autenticado */}
  return (
    <>
      <Router>
        {isAuthenticated ? 
        (
          
          <div className='grid-container'>
            <Header />
            <Sidebar />

            <RoutesComponent />
          </div>
        ) 
        : (
          <RoutesComponent />
        )}
      </Router>  
    </>
  )
}
export default App