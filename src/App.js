import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashBoard from './components/DashBoard';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import Shopping from './components/Shopping';
import Channel from './components/Channel';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/' element={ <DashBoard /> } />
            <Route path='/inventory' element={ <Inventory /> } />
            <Route path='/orders' element={ <Orders /> } />
            <Route path='/shopping' element={<Shopping /> } />
            <Route path='/channel' element={<Channel /> } />
          </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
