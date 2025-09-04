import styled from "styled-components"
import { iconsMapping } from "../icons/iconsMappging"
import { useEffect, useState } from "react"

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  `
const PageButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%; /* Lo hace circular */
  border: 1px solid var(--primary-color); /* Color del borde (ajustar si es necesario) */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;

  /* Estilos condicionales basados en si el botón está activo */
  background-color: ${props => (props.isActive ? '#008c8c' : '#ffffff')};
  color: ${props => (props.isActive ? '#ffffff' : '#008c8c')};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Span = styled.span`
`
const Pagination = ({onNextPage, onPrevPage, currentPage, nPages, onGoToPage}) => {
  const [pages, setPages] = useState()

  useEffect(() => {
    if (nPages) {
      const pageNumbers = [];
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(nPages, currentPage + 2);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      setPages(pageNumbers);
    }
  }, [nPages, currentPage]);
  return (
    <PaginationContainer>
      {currentPage > 1 && iconsMapping['MdOutlineKeyboardDoubleArrowLeft']({"data-tooltip-id" : "prevPage", size: 25, className:'icono-default', onClick:onPrevPage})}
      {currentPage > 3 && <PageButton onClick={() => onGoToPage(1)}>1</PageButton>}
      {currentPage > 4 && <span style={{color : 'var(--primary-color)'}}>...</span>}
      {pages?.map((pageNumber) => (
        <PageButton 
          key={pageNumber} 
          isActive={pageNumber === currentPage}
          onClick={() => onGoToPage(pageNumber)}
        >
          {pageNumber}
        </PageButton>
      ))}
      {nPages !== currentPage && iconsMapping['MdOutlineKeyboardDoubleArrowRight']({"data-tooltip-id" : "nextPage", size: 25, className:'icono-default', onClick:onNextPage})}
    </PaginationContainer>
  )
}

export default Pagination
