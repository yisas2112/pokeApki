import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../../services/fetchData'

const useQueryApi = ({queryKey, ruta, method, dataFetch}) => {
  const {data, status, isFetching, error, refetch} = useQuery({
    queryKey: [queryKey, dataFetch],
    queryFn: ()=>fetchData(ruta,method,dataFetch),
    enabled: false, // deshabilita la consulta automática
    retry: 1, // reintentar una vez en caso de error  
    refetchOnWindowFocus: false ,// no volver a consultar al enfocar la ventana
    staleTime: 5 * 60 * 1000 
  })
  return {data, status, isFetching, error, refetch}
}

export default useQueryApi
