import { useEffect, useState } from 'react'
import mensajeria from '../useMensajeria'

const useValidaCodeStatus = ({status, data, mensajeError}) => {
  const [datos, setDatos] = useState()

  useEffect(()=>{   
    if(status && status === 'success'){
      let statusFetch = data.status
      let metodoFech = data.config.method
      switch(statusFetch){
        case 200:
          switch(metodoFech){
            case 'get':
              setDatos(data)
            break;    
          }
          break;
        case 404:
          mensajeria({titulo : 'ATENCIÓN!', texto : `${mensajeError || 'Ha ocurrido un error.' }`, icono : "error"})
          break;
      }      
    }
  },[status, data]) 
  
  return {datos}
}

export default useValidaCodeStatus
