import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { DropdownContainer, SpanDropdown } from "../styles";

const DropdownEstado = ({handleChangeAncestor, defaultValue, readOnly, options, isSearchable, isMulti, targetNameHandleInput, title, placeholder, className, validaCambio}) => {
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    if (defaultValue && options) {
      let valueDefault = options?.find((option) => option.value === defaultValue)      
      setSelectedOption(valueDefault)      
    }
  }, [defaultValue, options]);

  const handleSelectChange = (selected) => {
    validaCambio ? 
      handleChangeAncestor(selected, targetNameHandleInput || 'estado', (isValid) => { // Pasa una función como callback
        if (isValid) {
          setSelectedOption(selected);
        }
      })
    : (handleChangeAncestor(selected, targetNameHandleInput || 'estado') , setSelectedOption(selected))
  };
  
  

  return (
    <DropdownContainer id="DropdownEstado" className={`dropdown-container ${className || ''}`} >
      { title && <SpanDropdown>{title}</SpanDropdown>}
      <ReactSelect
        name={targetNameHandleInput || "estado"}
        options={options}        
        value={selectedOption}
        menuPosition="fixed" 
        placeholder={placeholder}
        isDisabled={readOnly || false}    
        className={`react-select-container`}
        classNamePrefix="react-select"
        noOptionsMessage={() => 'No hay opciones disponibles'}
        isSearchable={isSearchable || false}
        isMulti = {isMulti}
        onChange={handleSelectChange}
      />
    </DropdownContainer>
  );
};

export default DropdownEstado;
