import styled from "styled-components"

export const DropdownContainer = styled.div
  `
     display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.3rem; 

      .react-select-container:focus {
    outline: none;
  }
  
  .react-select-container{
    min-width: 6.2rem;
    max-width: 20rem;
    .css-art2ul-ValueContainer2{
      padding: 0 0.3rem;      
    }
  } 
  .react-select__control {
    font-size: 0.7rem;
    min-height:  1.5rem;
    border-radius: 5px;
    background-color: var(--primary-color);
    box-shadow: none;
    display: flex;
    flex-direction: row;
    border: none;    
    .react-select__input-container {
      margin: 0;      
      color: white;
    }

    .react-select__placeholder {
      color: white;
    }

    .react-select__single-value {
      color: white;

    }
    
    .css-1xc3v61-indicatorContainer{
      padding: 0 0.3rem;   
    }
  }

  .react-select__control--is-focused {
    border: none;
  }

  .react-select__control:hover {
    border: none;
    
  }
  .react-select__menu {
    min-width: max-content;
    font-size: 0.7rem;
    text-align: left;    
    .react-select__menu-list {
      color: #181818;
      max-height: 20rem;
      .react-select__option:hover {        
        background-color: var(--primary-color);
        color: white;
      }

      .react-select__option--is-selected {
        background-color: var(--primary-color);
        color: white;
      }
    }
  }    

  .react-select__indicators {
    .react-select__indicator {
      padding: 0 0.3rem 0 0;
      color: white;
      width: 1.3rem;

    }
  }
  `
export const SpanDropdown = styled.span
  `
    color: var(--primary-color);
    `