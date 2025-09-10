import { genderAdapter } from '@adapter/pokemon/dropdown/gender'
import useQueryApi from '@hooks/useQueryApi/useQueryApi'
import React, { useEffect, useState } from 'react'

const DropdownGender = ({defaultValue}) => {
  const [genders, setGenders] = useState([])
  const [selectedOption, setSelectedOption] = useState()  
  const {datosFormateados : Pokemones, refetch} = useQueryApi({
    queryKey : 'getAllPokemon', 
    ruta : `gender`,
    method : 'get', 
    adapter : genderAdapter,
  })

  useEffect(() => {
    refetch()
  }, []);

  useEffect(() => {
    if (defaultValue && genders.length > 0) {
    const defaultOption = genders.filter(element =>  defaultValue.includes(element.value))
    setSelectedOption(defaultOption)
    }
    }, [defaultValue, genders])

  return (
    <div>
      
    </div>
  )
}

export default DropdownGender
