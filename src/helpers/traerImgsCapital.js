export const traerImgsCapital = async() => {

  const data = await fetch(`https://maps.googleapis.com/maps/api/streetview?size=${size}&location=${location}&key=${API_KEY}`)
  
  //NO ESTA SIENDO USADO - INCONLCUSO
}
