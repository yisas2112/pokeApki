import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import GlobalStyle from './styles/globalStyle';
function App() {

  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/About' element={<h1>About</h1>} />
      </Routes>
    </>
  )
}

export default App
