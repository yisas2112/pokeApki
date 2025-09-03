import { useMemo, useState } from 'react'

const usePagination = ({data}) => {  
  const [currentPage, setCurrentPage] = useState(1);  
  const registrosPorPagina = 10;

  //Calculo total de paginas
  const nPages = useMemo(() => {
    return Math.ceil((data?.length || 0) / registrosPorPagina);
  }, [data]);
  
  //registros actuales segun nº de paginas
  const currentRecords = useMemo(() => {
    if (!data) return [];
    // Calcula el índice final para cortar el array.
    const indexOfLastRecord = currentPage * registrosPorPagina;
     // Calcula el índice inicial para cortar el array.
    const indexOfFirstRecord = indexOfLastRecord - registrosPorPagina;
    return data.slice(indexOfFirstRecord, indexOfLastRecord);
  }, [data, currentPage]);

  const nextPage = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { currentRecords, nextPage, prevPage, nPages, currentPage}
}

export default usePagination
