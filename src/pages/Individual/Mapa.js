import React, {useEffect} from 'react'

export const Mapa = ({latitud, longitud}) => {

  useEffect(() => {
    const MI_MAPA = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4.5,
      center: {lat: latitud, lng: longitud}
    })

    new window.google.maps.Marker({
      position: {lat: latitud, lng: longitud},
      map: MI_MAPA
    })

  }, [latitud, longitud])


  //////////////////////////////
  return (
    <div id='map' />
  )
}
