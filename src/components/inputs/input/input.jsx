import { useEffect, useState } from "react";
import styled from "styled-components"

const InputContainer = styled.div `
  width: 100%;
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

const InputDatos = styled.input `
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;

  &:focus {
    color: rgba(0, 0, 0, 0.8);;
  }
`;

const Label = styled.span `
  font-size: 1.5rem;
`;


const Input = ({keyRow, id, name,label,  type, handleChange, width, value, readOnly, color, placeholder, ref, onFocus, onBlur, onKeyDown, className,classNameContainer ,min, maxLength, background, max, autoFocus, validaCambio, idDataTooltip, customStyles }) => {
  const [dataInput, setDataInput] = useState("");

  useEffect(() => {
     setDataInput(value);
  }, [value]);

  const handleOnChange = (e) => {
    let valor = e.target.value;
    validaCambio ? handleChange(e, name, (isValid)=>{
      if(isValid){
        setDataInput(valor);
      }
    }) : (handleChange(e, name), setDataInput(valor))    
  }  
  
  const handleKeyDown = (e) => {
    if ((e.key === "e" || e.key === "E" || e.key == "-") && type === 'number') {
      e.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <InputContainer className={classNameContainer}>
      {label && <Label>{label}</Label>}
      <InputDatos
        key={keyRow}
        id={id}
        ref={ref}
        style={{...customStyles, width : width, color : color, background: background}}      
        className={`${readOnly ? "inputDatosReadOnly" : ""} ${className ? className : ''}` }
        type={type || "text"}
        placeholder={placeholder || ""}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleOnChange}
        value={dataInput || ''}      
        data-tooltip-id={idDataTooltip}
        disabled={readOnly || false}
        autoFocus={autoFocus}
        onKeyDown={handleKeyDown}
        min={min}
        max={max}
        maxLength={maxLength}      
      />
    </InputContainer>
  )
}

export default Input
