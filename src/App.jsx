import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import GlobalStyle from './styles/globalStyle';
import SearchPokemon from './pages/searchPokemon/searchPokemon';
import TooltipCentralized from './components/tooltip/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonDetailContainer from './components/pokemon/pokemonDetailContainer/pokemonDetailContainer';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<SearchPokemon/>} />
            <Route path='/pokemon/:name' element={<PokemonDetailContainer/>} />
            <Route path='/About' element={<h1>About</h1>} />
          </Routes>
          <TooltipCentralized/>  
      </QueryClientProvider>
    </>
  )
}

export default App
