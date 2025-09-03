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
  border: 1px solid #008c8c; /* Color del borde (ajustar si es necesario) */
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
const Pagination = ({onNextPage, onPrevPage, currentPage, nPages}) => {
  const [pages, setPages] = useState()

  useEffect(() => {
    if(nPages){

    }
    
  }, [nPages]);
  return (
    <PaginationContainer>
      {currentPage > 1 && iconsMapping['MdOutlineKeyboardDoubleArrowLeft']({"data-tooltip-id" : "prevPage", size: 25, className:'icono-default', onClick:onPrevPage})}
      {currentPage && <PageButton>
          {currentPage}
        </PageButton>}
      {nPages !== currentPage && iconsMapping['MdOutlineKeyboardDoubleArrowRight']({"data-tooltip-id" : "nextPage", size: 25, className:'icono-default', onClick:onNextPage})}
    </PaginationContainer>
  )
}

export default Pagination
