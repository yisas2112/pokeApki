import styled from "styled-components"
import { iconsMapping } from "../icons/iconsMappging"

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  `
const Pagination = ({onNextPage, onPrevPage, currentPage, nPages}) => {
  return (
    <PaginationContainer>
      {currentPage > 1 && iconsMapping['MdOutlineKeyboardDoubleArrowLeft']({"data-tooltip-id" : "prevPage", size: 25, className:'icono-default', onClick:onPrevPage})}
      {nPages !== currentPage && iconsMapping['MdOutlineKeyboardDoubleArrowRight']({"data-tooltip-id" : "nextPage", size: 25, className:'icono-default', onClick:onNextPage})}
    </PaginationContainer>
  )
}

export default Pagination
