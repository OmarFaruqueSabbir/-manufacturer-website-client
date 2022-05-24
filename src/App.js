import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAdmin from './components/auth/requireAdmin';
import RequireAuth from './components/auth/requireAuth';
import Navbar from './components/shared/Navbar/Navbar';
import AllUsers from './pages/Dashboard/AllUsers';
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

        <Route path='/dashboard' element={<RequireAuth> <Dashboard /> </RequireAuth>}>
        <Route index element={<MyOrders></MyOrders>}></Route>
        <Route path='allUsers' element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
