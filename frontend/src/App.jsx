import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Pages Imports
import Signup  from './pages/Signup'
import Login from './pages/Login'
import HomePage from './pages/Home'
import PageNotFound from './pages/404'
import ProductsPage from './pages/Products'
import Admin from './pages/Admin'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Signup />}/>
           <Route path='/login' element={<Login />}/>
           <Route path='/home' element={<HomePage />}/>
           <Route path='/products' element={<ProductsPage />}/>
           <Route path='/admin' element={<Admin />}/>
           <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
