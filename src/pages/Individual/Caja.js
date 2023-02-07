import React from 'react'
import { formatearNumero } from '../../helpers/formatearNumero'

export const Caja = ({pais}) => {

  // const [lista, setLista] = useState()

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
      titulo: 'Hora',
      valor: '12:57:25 AM'
    },{
      titulo: 'Temperatura',
      valor: '32 °C'
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
