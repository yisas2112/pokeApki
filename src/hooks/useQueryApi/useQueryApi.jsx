import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { fetchData } from '@services/fetchData'
import useValidaCodeStatus from '@hooks/useValidaCodeStatus/useValidaCodeStatus'

const useQueryApi = ({queryKey, ruta, method, dataFetch = {}, adapter, mensajeError, columnsToFilter}) => {
  const [datosFormateados, setDatosFormateados] = useState()
  const {data, status, isFetching, error, refetch} = useQuery({
    queryKey: [queryKey, dataFetch],
    queryFn: ()=>fetchData(ruta,method,dataFetch),
    enabled: false, // deshabilita la consulta automática
    retry: 1, // reintentar una vez en caso de error  
    refetchOnWindowFocus: false ,// no volver a consultar al enfocar la ventana
    staleTime: 5 * 60 * 1000 
  })

  const {datos} = useValidaCodeStatus({status : status, data : data, metodo : method, mensajeError : mensajeError})

  useEffect(() => {
    if(datos){
      let dataFormateada = adapter ? adapter(datos) : datos;
      let dataFiltrada = columnsToFilter ? columnsToFilter(dataFormateada) : dataFormateada
      setDatosFormateados(dataFiltrada)
    }
  }, [datos]);

  
  return {data, status, isFetching, error, refetch, datos, datosFormateados}
}

export default useQueryApi
