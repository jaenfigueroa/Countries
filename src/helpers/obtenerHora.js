export const obtenerHora = () =>{
  
  const date = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short'
  };
  
  const time = date.toLocaleString('en-US', options);
  // console.log(time + " UTC+04:00");

  console.log(time)

  return time
}

