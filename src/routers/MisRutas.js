import React from 'react'
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Search } from '../pages/Search/Search'
import { Inicio } from '../pages/Inicio/Inicio'

////////////////////////////////////////////
export const MisRutas = () => {


  ///////////////////////////////////////////
  return (
    <HashRouter>

      {/* HEADER Y NAVEGACION */}
      <Header/>

      {/* CUERPO */}
      <main className='main'>
        <Routes>

          <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/search' element={<Search/>}/>

          <Route path='*' element={<p>No existe la pagina</p>}/>

        </Routes>
      </main>

      {/* FOOTER */}
      <Footer/>


    </HashRouter>
  )
}
