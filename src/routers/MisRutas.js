import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Pagina404 } from '../components/Pagina404/Pagina404'
import { Home } from '../components/Home/Home'
import { Search } from '../components/Search/Search'
import { Random } from '../components/Random/Random'
import { Compare } from '../components/Compare/Compare'

/////////////////////////////////////////////////////////////////////
export const MisRutas = () => {

  useEffect(() => {
    const traerdatos = async () => {
      try {
  
        const peticion = await fetch('https://restcountries.com/v3.1/name/peru')
        const data = await peticion.json()

        console.log(data[0])
        
      } catch (error) {
        console.log(error)
      }
    }
  
    traerdatos()
  }, []);
  
  /////////////////////////////////////////////////////////////////////
  return (
    <BrowserRouter>

      {/* HEADER Y NAVEGACION */}
      <Header/>

      {/* CUERPO */}
      <main>
        <Routes>

          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/random' element={<Random/>}/>
          <Route path='/compare' element={<Compare/>}/>
          <Route path='*' element={<Pagina404/>}/>

        </Routes>

      </main>

      {/* FOOTER */}
      <Footer/>

    </BrowserRouter>
  )
}
