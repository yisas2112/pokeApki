import { useEffect, useState } from "react";
import styled from "styled-components"

const InputContainer = styled.div `
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

const InputDatos = styled.input `
`;

const Label = styled.span `
  font-size: 1.5rem;
`;


const Input = ({keyRow, id, name,label,  type, handleChange, width, value, readOnly, color, placeholder, ref, onFocus, onBlur, onKeyDown, className,classNameContainer ,min, maxLength, background, max, style, autoFocus, validaCambio, idDataTooltip, maxWidth }) => {
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
    }) : (handleChange(e, name), setDataInput(e.target.value))    
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
        style={{ width: width, color : background == '#ffff00' ? 'black' : color , background : background, style, maxWidth : maxWidth}}      
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
