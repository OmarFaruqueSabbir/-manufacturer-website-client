import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAdmin from './components/auth/requireAdmin';
import RequireUser from './components/auth/requireUser';
import RequireAuth from './components/auth/requireAuth';
import Navbar from './components/shared/Navbar/Navbar';
import AddProducts from './pages/Dashboard/AddProducts';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageOrders from './pages/Dashboard/ManageOrders';
import ManageProducts from './pages/Dashboard/ManageProducts';
import MyOrders from './pages/Dashboard/MyOrders';
import InsertProfile from './pages/Dashboard/InsertProfile';
import Payment from './pages/Dashboard/Payment';
import Users from './pages/Dashboard/Users';
import Home from './pages/Home/Home';
import ToolPurchase from './pages/Home/ToolPurchase/ToolPurchase';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import MyProfile from './pages/Dashboard/MyProfile';
import UpdateProfile from './pages/Dashboard/UpdateProfile';
import Portfolio from './pages/Portfolio/Portfolio';
import Footer from './components/shared/Footer/Footer';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tool/:toolId' element={<RequireAuth> <ToolPurchase /> </RequireAuth>}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blogs' element={<Blogs />} />

        <Route path='/dashboard' element={<RequireAuth> <Dashboard /> </RequireAuth>}>
        <Route index element={<InsertProfile />}></Route>
        <Route path='myOrders' element={<RequireUser><MyOrders /></RequireUser>}></Route>
        <Route path='allUsers' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
        <Route path='payment/:id' element={<Payment />}></Route>
        <Route path='addReview' element={<RequireUser><AddReview /></RequireUser>}></Route>
        <Route path='manageOrders' element={
          <RequireAdmin><ManageOrders /></RequireAdmin>
        }></Route>
        <Route path='manageProducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
        <Route path='addProducts' element={<RequireAdmin><AddProducts /></RequireAdmin>}></Route>
        <Route path='myProfile' element={<MyProfile />}></Route>
        <Route path='update/:id' element={<UpdateProfile />}></Route>

        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
