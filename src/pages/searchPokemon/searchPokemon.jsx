import styled from 'styled-components';
import { useState } from 'react';
import Input from '@components/inputs/input/input';
import { ContainerDiv } from '@styledComponents/divContainer';
import { iconsMapping } from '@components/icons/iconsMappging';
import UserForm from '@hooks/useForm/userForm';
import ContainerCards from '@components/pokemonByNames/containerCards/containerCards';
import useGetPokemon from '@hooks/useGetPokemon/useGetPokemon';
import { filterPokemonByName } from '@utilities/index';
import Pagination from '@components/pagination/pagination';
import usePagination from '@hooks/usePagination/usePagination';
import DropdownEstado from '@components/dropdowns/estado';
import { ORDER_POKEMON } from '@constants/dropdowns';

const SearchPokemonContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  gap: 20px;
`;

const Formulario = styled.form `
  width: 30%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchPokemon = () => {
  const {Pokemones} = useGetPokemon()
  const [pokemonFiltrados, setPokemonFiltrados] = useState();
  const [showFilters, setShowFilters] = useState(false)
  const { currentRecords, nextPage, prevPage, nPages, currentPage, onGoToPage} = usePagination({data : pokemonFiltrados})  
  const { handleChange, values } = UserForm({
    name:''
  });

  const handleClick = (eventName)=>{
    switch(eventName){
      case 'filter':
        setShowFilters(!showFilters)
      break;
    }

  }

  const onSubmit = (e)=>{
    e.preventDefault();
    let result = filterPokemonByName(Pokemones, values.name)
    setPokemonFiltrados(result)
  }
  return (
    <SearchPokemonContainer className='SearchPokemonContainer'>
      <Formulario onSubmit={onSubmit}>
        <Input placeholder={'Nombre o número'} handleChange={handleChange} name={'name'}/>
        {iconsMapping['FaSearch']({"data-tooltip-id" : "iconBuscar",size:25, className:'icono-default', onClick:onSubmit})}
        {iconsMapping['FaFilter']({"data-tooltip-id" : "filter",size:25, className:'icono-default', onClick:()=>handleClick('filter')})}
        {showFilters &&
        <ContainerDiv className='filters'>
          <DropdownEstado
            options={ORDER_POKEMON}
            handleChangeAncestor={handleClick}
            targetNameHandleInput={'order'}
            title={'Ordenar por:'}
          />
        </ContainerDiv>}
      </Formulario>
      <ContainerCards pokemons={currentRecords}/>
      {nPages > 1 &&
      <Pagination currentPage={currentPage} nPages={nPages} onNextPage={nextPage} onPrevPage={prevPage} onGoToPage={onGoToPage}/>
      }
    </SearchPokemonContainer>
  )
}

export default SearchPokemon
