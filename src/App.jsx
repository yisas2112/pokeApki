import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import GlobalStyle from './styles/globalStyle';
import SearchPokemon from './pages/searchPokemon/searchPokemon';
function App() {

  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<SearchPokemon/>} />
        <Route path='/About' element={<h1>About</h1>} />
      </Routes>
    </>
  )
}

export default App
