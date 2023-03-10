import React from 'react'
import { BrowserRouter , Routes, Route, Navigate} from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Search } from '../pages/Search/Search'
import { Inicio } from '../pages/Inicio/Inicio'
import { Individual } from '../pages/Individual/Individual'

////////////////////////////////////////////
export const MisRutas = () => {


  ///////////////////////////////////////////
  return (
    <BrowserRouter >

      {/* HEADER Y NAVEGACION */}
      <Header/>

      {/* CUERPO */}
      <main className='main'>
        <Routes>

          <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route path='/inicio' element={<Inicio/>}/>
          
          <Route path='/search/' element={<Navigate to='/search/1'/>}/>
          <Route path='/search/:pagina' element={<Search/>}/>

          {/* <Route path='/individual' element={<Navigate to='/individual/aleatorio'/>}/> */}
          <Route path='/individual' element={<Navigate to='/individual/china'/>}/>
          <Route path='/individual/:nombre' element={<Individual/>}/>

          <Route path='*' element={<p>No existe la pagina</p>}/>

        </Routes>
      </main>

      {/* FOOTER */}
      <Footer/>


    </BrowserRouter>
  )
}
