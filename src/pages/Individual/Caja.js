import React, { useEffect, useState } from 'react'
import { formatearNumero } from '../../helpers/formatearNumero'

export const Caja = ({pais}) => {

  // console.log(pais)
  //////////////////////////////////
  const [clima, setClima] = useState()
  const [hora, setHora] = useState()

  useEffect(()=>{
    const pedir = async () =>{

      const latitud = pais.coordenadasCapital[0]
      const longitud = pais.coordenadasCapital[1]

      const peticion = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=92cb5013439f9a880d7f01b358c7e171`)
      const data = await peticion.json()

      const peticion2 = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=Y5SK1W1AQBHQ&format=json&by=position&lat=${latitud}&lng=${longitud}`)
      const data2 = await peticion2.json()

      const tempkelvin = data.main.temp
      setClima(tempkelvin - 273)

      setHora(data2.formatted)
    }

    pedir()
  },[pais.coordenadasCapital])

  ////////////////////////////////

  const lista = [
    {
      titulo: 'Continente',
      valor: pais.continente
    },{
      titulo: 'Subcontinente',
      valor: pais.subcontinente
    },{
      titulo: 'Independiente',
      valor: pais.paisIndependiente ? 'Yes' : 'No'
    },{
      titulo: 'Area',
      valor: formatearNumero(pais.area)
    },{
      titulo: 'Capital',
      valor: pais.capital
    },{
      titulo: 'Poblacion',
      valor: formatearNumero(pais.poblacion)
    },{
      titulo: 'Moneda',
      valor: pais.moneda.nombre
    },{
      titulo: 'Fecha y hora',
      valor: hora
    },{
      titulo: 'Temperatura',
      valor: `${Number(clima).toFixed(2)}°C`
    },{
      titulo: 'Dominio',
      valor: 'pais.dominio'
    },{
      titulo: 'Codigo Tel.',
      valor: pais.codigoTel
    },{
      titulo: 'Idioma',
      valor: pais.idiomas
    },
  ]



  //////////////////////////////////
  return (
    <section className='informacion'>
      {
        lista.map((x, index) => (
          <div className='item' key={index}>
            <p className='titulo'>{x.titulo}</p>
            <p className='dato'>{x.valor}</p>
          </div>
        ))
      }
    </section>
  )
}



///////////////////////////////////////////