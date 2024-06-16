
import './App.css';
// Library
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// Secuirty
import OpenRoute from './routes/OpenRoute';
import PrivateRoute from './routes/PrivateRoute';
//Component
import Header from "./components/common/Navbar/Header"

//component

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import AllProduct from './pages/AllProduct';

import Dashboard from './pages/Admin/Dashboard/Dashboard';
import ContactUsForm from './pages/ContactUsForm';

// Admin 
import MainDashboard from './pages/Admin/MainDashboard';
import AddProduct from './pages/Admin/Product/AddProduct';
import AllProductAdmin from './pages/Admin/Product/AllProduct';
import AddCategory from './pages/Admin/Product/AddCategory';
import { fetchMyProfile } from './serivces/operations/user';
//API
import { getAllProduct } from "./serivces/operations/product";
import { useEffect } from 'react';

 


function App() {

  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate()
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getAllProduct());

  if (token) {
    dispatch(fetchMyProfile(token,navigate));
  }
}, [token]);
  return (
    <div className="min-w-screen min-h-screen flex flex-col font-montserrat">
<Header />


<Routes >

<Route path="/" element={<Home />} />
<Route path="/allTest" element={<AllProduct />} />
<Route path="contact" element={<ContactUsForm />} />

{/*  */}

<Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />




{
  user?.accountType === "Admin" &&(
    <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
  <Route
            path="admin/dashboard/add-product"
            element={
              <PrivateRoute>
              <AddProduct />
              {/* <AllProductAdmin /> */}
              </PrivateRoute>
            }
          />
  <Route
            path="admin/dashboard/add-category"
            element={
              <PrivateRoute>
              <AddCategory />
              </PrivateRoute>
            }
          />

  <Route
            path="admin/dashboard/all-product"
            element={
              <PrivateRoute>
              <AllProductAdmin />
              </PrivateRoute>
            }
          />
  <Route
            path="admin/dashboard"
            element={
              <PrivateRoute>
              <MainDashboard />
              </PrivateRoute>
            }
          />
        /</Route>
  )
}

</Routes>





{/* Admin Routes */}


    </div>
  );
}

export default App;
