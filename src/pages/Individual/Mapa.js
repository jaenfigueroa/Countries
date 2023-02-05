import React, {useEffect} from 'react'

export const Mapa = ({latitud, longitud}) => {

  useEffect(() => {
    const MI_MAPA = new window.google.maps.Map(document.getElementById('map'), {
      // zoom: 4.5,
      // zoom: 4,
      // zoom: 4.2,
      zoom: 4.3,
      center: {lat: latitud, lng: longitud}, 
      streetViewControl: false, /* PARA DESACTIVAR LO DE MOVERME EN LA CIUDAD */
      mapTypeId: 'terrain', /* TIPO DE MAPA */
      // mapTypeId: 'satellite',
      // mapTypeId: 'hybrid',
      scrollwheel: false /* SI EL UUSARIO DEBE PODER USAR EL SCROLL PARA HCER ZOOM */
    })

    new window.google.maps.Marker({
      position: {lat: latitud, lng: longitud},
      map: MI_MAPA,
    })

  }, [latitud, longitud])


  //////////////////////////////
  return (
    <div id='map' />
  )
}
