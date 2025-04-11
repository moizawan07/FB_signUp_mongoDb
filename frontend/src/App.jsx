import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup  from './pages/Signup'
import Login from './pages/Login'
import HomePage from './pages/Home'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Signup />}/>
           <Route path='/login' element={<Login />}/>
           <Route path='/home' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
