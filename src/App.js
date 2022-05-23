import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import Home from './pages/Home/Home';
import ToolPurchase from './pages/Home/ToolPurchase/ToolPurchase';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tool/:toolId' element={<ToolPurchase />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard' element={ <Dashboard /> }>
        <Route index element={<MyOrders></MyOrders>}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
