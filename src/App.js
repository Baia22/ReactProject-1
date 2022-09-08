import './App.css';
import { Outlet } from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import { ContextProvider } from './Context';


function App() {
  return (
   <div className='app'>
    <ContextProvider>
    <Header />
    <Outlet />
    <Footer />
    </ContextProvider>
   </div>
  );
}

export default App;
