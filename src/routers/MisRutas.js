import React, { useEffect, useState } from 'react'
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Pagina404 } from '../components/Pagina404/Pagina404'
import { Home } from '../components/Home/Home'
import { Search } from '../components/Search/Search'
import { Random } from '../components/Random/Random'
import { Compare } from '../components/Compare/Compare'
import { traerPais } from '../helpers/traerPais'


const traerObjetoPaises = async()=>{

  const datos = await traerPais('chile')

  console.log(datos);
  return 'vaca'
}


/////////////////////////////////////////////////////////////////////

export const MisRutas = () => {

  const [lista, setLista] = useState(traerObjetoPaises)


  /////////////////////////////////////////////////////////////////////
  return (
    <HashRouter>

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


    </HashRouter>
  )
}
