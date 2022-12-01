import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Newsdetail from './pages/Newsdetail'
import Login from './pages/Login'
import Navbarr from './componentes/Navbar'
import Loading from './componentes/Loading'
import { useSelector } from 'react-redux'
import "./styles/App.css"
import ProtectedRoutes from './componentes/RuteProtect'


function App() {
 
const isLoadingg=useSelector(state=>state.loading)

  return (
  <HashRouter>
    <div className="App">
      
    {isLoadingg&&<Loading/>}

    <Navbarr/>
    
     <Routes>

      <Route  path='/' element={<Home/>}/>
      <Route  path='/product/:id' element={<Newsdetail/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}><Route  path='/purchases' element={<Favorites/>}/></Route>
     </Routes>
    </div>
    </HashRouter>
  )
}

export default App
