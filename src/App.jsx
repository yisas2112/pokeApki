import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TooltipCentralized from '@components/tooltip/tooltip';
import Navbar from '@components/navbar/navbar';
import GlobalStyle from '@styles/globalStyle';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle/>
          <Navbar/>
          <Outlet />
          <TooltipCentralized/>  
      </QueryClientProvider>
    </>
  )
}

export default App
