import React, { useState } from 'react'

export const Selector = ({elemento, agregarEtiqueta, quitarEtiqueta}) => {

  // console.log(elemento)

  const [botonActivo, setBotonActivo] = useState(false)

  const abrirCaja = ()=> setBotonActivo(!botonActivo)

  //MANEJAR LOS ELEMENTOS A MOSTRAR - FILTRADO /////////////////
  const [lista] = useState(elemento.opciones)

  // const filtrarOpciones = (evento)=>{

  //   let busqueda = evento.target.value.toLowerCase()
  //   let resultados = elemento.opciones.filter(x => x.includes(busqueda))

  //   setLista(resultados)
  // } 

  //MANEJAR LOS ELEMENTOS A MOSTRAR - FILTRADO 2 /////////////////

  let [busquedaTexto, setBusquedaTexto] = useState(null)

  const filtrarOpciones = (evento)=>{

    //OBTENER LA BSUQUEDA ESCRITA EN EL BUSCADOR
    let busqueda = evento.target.value.toLowerCase()

    setBusquedaTexto(evento.target.value.toLowerCase())

    //TRAER UN ARRAY DE LOS INPUT CHECKBOX
    // console.log(elemento.titulo)
    
    const resultados = document.querySelectorAll(`.contenedor-opciones[name="${elemento.titulo}"] label`)
    
    // console.log(resultados);
    
    //FILTRAR LOS QUE NO COINCIDEN

    resultados.forEach(x =>{

      // console.log(x);
      // console.log(x.dataset.example)

      if (x.dataset.example.includes(busqueda)) {
        x.style.display = 'flex'

      } else{
        x.style.display = 'none'
      }

    })

  } 


  //VERIFICAR EL CHECKBOX - AGREGAR O QUITAR ETIQUETA AL HACE CLICK EN EL CHECKBOX


  const verificarCheckbox = (evento, tipo) =>{
    // console.log(evento.target.checked);
    // console.log(evento.target.name) 

    // console.log(tipo)

    if (evento.target.checked) {

      agregarEtiqueta(tipo, evento.target.name)

    } else{
      quitarEtiqueta(evento.target.name)
    }
  }


  //EVALUAR LA CANTIDAD DE NDOOS QUE TIENE

  const [numNodos, setNumNodos] = useState(elemento.opciones.length)

  const evaluarCantidadResultados = (evento)=>{

    let busqueda = evento.target.value.toLowerCase()
    let resultados = elemento.opciones.filter(x => x.includes(busqueda))

    setNumNodos(resultados.length)
  } 

  /////////////////////////////////////////////////
  return (
    <div className='selector'>
      
      {/* BOTON PARA ABRIR */}
      <button className='boton' onClick={abrirCaja}>
        {elemento.titulo + ` (${elemento.opciones.length})`} <i className={`fa-solid fa-chevron-down ${botonActivo&&'boton--abierto'}`}/>
      </button>

      {/* CONTENIDO */}
      <article className='caja' style={{ display: botonActivo ? "flex" : "none" }}>

          {/* INPUT PARA FILTRAR */}
          <input
            className='input'
            type="text"
            placeholder='Buscar'
            onChange={(evento)=>{
              filtrarOpciones(evento)
              // console.log('vaca');
              evaluarCantidadResultados(evento)
            }} />

          <p className='numero'>{numNodos}</p>

          {/* CONTENEDOR DE OPCIONES */}
          <div className='contenedor-opciones' name={elemento.titulo}> {/* name: elemeento.titulo PROV */}
            {
              lista.map((x, index) =>(
                x && (
                  <label key={index}  data-example={x}> {/* name:x PROV */}
                    <input type="checkbox" value="opcion1" onChange={(e)=>verificarCheckbox(e, elemento.tipo)} name={`${x}`}/>{x}
                  </label>
                )
              ))
            }
            
          </div>
          
          {
            numNodos === 0 && (
              <p className='aviso-resultados'>Lo sentimos, no encontramos resultados para <strong>"{busquedaTexto}"</strong>, intente buscar con un término más general.</p>
            )
          }
        </article>

    </div>
  )
}
