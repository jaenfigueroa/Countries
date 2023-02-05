import React, {useEffect} from 'react'

export const Mapa = ({latitud_pais, longitud_pais, latitud_capital, longitud_capital}) => {

  useEffect(() => {
    const MI_MAPA = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4.3,
      center: {lat: latitud_pais, lng: longitud_pais}, 
      streetViewControl: false, /* PARA DESACTIVAR LO DE MOVERME EN LA CIUDAD */
      mapTypeId: 'terrain', /* TIPO DE MAPA */

      scrollwheel: false /* SI EL UUSARIO DEBE PODER USAR EL SCROLL PARA HCER ZOOM */
    })

    new window.google.maps.Marker({
      position: {lat: latitud_capital, lng: longitud_capital},
      map: MI_MAPA,
    })

  }, [latitud_pais, longitud_pais, latitud_capital, longitud_capital])


  //////////////////////////////
  return (
    <div id='map' />
  )
}
