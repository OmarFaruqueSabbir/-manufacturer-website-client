import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAdmin from './components/auth/requireAdmin';
import RequireAuth from './components/auth/requireAuth';
import Navbar from './components/shared/Navbar/Navbar';
import AddProducts from './pages/Dashboard/AddProducts';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrders from './pages/Dashboard/MyOrders';
import Payment from './pages/Dashboard/Payment';
import Users from './pages/Dashboard/Users';
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
        <Route path='allUsers' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
        <Route path='payment/:id' element={<Payment />}></Route>
        <Route path='addReview' element={<AddReview />}></Route>
        <Route path='manageOrders' element={<ManageOrders />}></Route>
        <Route path='manageProducts' element={<ManageProducts />}></Route>
        <Route path='addProducts' element={<AddProducts />}></Route>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
