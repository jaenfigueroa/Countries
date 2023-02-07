import { useCallback, useState } from "react"
// import { useNavigate } from "react-router-dom"

export const useFiltrar = (lista, etiquetas) => {

  const [restantes, setRestantes] = useState([])

  //USAR USE CALL BACK PARA MEMORIZAR EL VALOR QUE DEVULVE UNA FUNCION
  const filtrarMemorizado = useCallback(() => {
  
    let restantes = []

    lista.forEach(pais => {

      let resultado = comprobarCoincidencias(pais, etiquetas)
      console.log(resultado)

      if (resultado) {
        restantes = [...restantes, pais]
      }
    })

    // console.log(restantes);

    //SI HAY RESULTADOS DE COINCIDENCIAS CON LAS ETIQUETAS, MOSTRAR ESA LISTA
    if (restantes.length >= 1) {
      setRestantes(restantes)
    //PERO SI NO HAY COINCIDENCIAS, ENTONCES MOSTRAR LA LISTA ORIGINAL
    } else{
      setRestantes(lista)
    }
    
  } , [etiquetas, lista])

  
  return {
    listaRestantes: restantes,
    filtrarMemorizado
  }
}


//COMPROBAR LAS COINCIDENCIAS ///////////////////////////////////////////////////////
//COMPROBAR LAS COINCIDENCIAS ///////////////////////////////////////////////////////
const comprobarCoincidencias = (pais, etiquetas) =>{
  
  // console.log(pais)
  // console.log(etiquetas)

  for (const key in etiquetas) {
    // console.log(etiquetas[key].valor)
    // console.log(pais[etiquetas[key].tipo])
    if(etiquetas[key].valor === pais[etiquetas[key].tipo]){
      return true
    }
  }
  return false
}



// function comprobarCoincidencias(pais, etiquetas){

//   console.log('PAIS:', pais)
//   console.log('ETIQUETAS:', etiquetas)

//   for (const key in pais) {

//     if(isNaN(pais[key]) && pais[key]){

//       for (const key in etiquetas) {
    
//         // console.log(etiquetas[key].valor)
//         // console.log(pais[etiquetas[key].tipo])
        
//         if(etiquetas[key].valor === pais[etiquetas[key].tipo]){
//           return true
//         }
//       }
      
//     }
    
//     return false
//   }
// }



