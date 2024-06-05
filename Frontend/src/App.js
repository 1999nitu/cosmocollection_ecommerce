
import './App.css';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './Components/Layouts/Master';
import Contact from './Components/Pages/Contact';
import Mens from './Components/Pages/Mens';
import About from './Components/Pages/About';
import Womens from './Components/Pages/Womens';
import Home from './Components/Pages/Home';
import Error from './Components/Layouts/Error';

import AddCategory from './Components/Admin/Category/AddCategory';
import ManageCategory from './Components/Admin/Category/ManageCategory';
import EditCategory from './Components/Admin/Category/EditCategory';
import ViewSingleCategory from './Components/Admin/Category/ViewSingleCategory';

import AddSubCategory from './Components/Admin/SubCategory/AddSubCategory';
import ManageSubCategory from './Components/Admin/SubCategory/ManageSubCategory';
import EditSubCategory from './Components/Admin/SubCategory/EditSubCategory';
import ViewSingleSubCategory from './Components/Admin/SubCategory/ViewSingleSubCategory';

import AddProduct from './Components/Admin/Product/AddProduct';
import EditProduct from './Components/Admin/Product/EditProduct';
import ManageProduct from './Components/Admin/Product/ManageProduct';
import ViewSingleProduct from './Components/Admin/Product/ViewSingleProduct';


import AddCoupon from './Components/Admin/Coupons/AddCoupon';
import ManageCoupon from './Components/Admin/Coupons/ManageCoupon';
import ViewSingleCoupon from './Components/Admin/Coupons/ViewSingleCoupon';
import EditCoupon from './Components/Admin/Coupons/EditCoupon';

import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import ApiServices from './Components/ApiServices';

import UserViewSubCategory from './Components/User/UserViewSubCategory';
import UserViewProduct from './Components/User/UserViewProduct';
import UserViewCoupon from './Components/User/UserViewCoupon';
import UserViewCategory from './Components/User/UserViewCategory';

import SkinCare from './Components/User/SkinCare';
import UserLogin from './Components/User/UserLogin';





function App() {
 //npm i react-router-dom

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Master/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/womens' element={<Womens/>}/>
     



        <Route path='/*' element={<Error/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        {/* <Route path='/contact1' element={<Contact1/>}/> */}


        <Route path='/addcategory' element={<AddCategory/>}/>
        <Route path='/managecategory' element={<ManageCategory/>}/>
        <Route path='/editcategory/:id' element={<EditCategory/>}/>
        <Route path='/singlecategory/:id' element={<ViewSingleCategory/>}/>

        <Route path='/singlesubcategory/:id' element={<ViewSingleSubCategory/>}/>
        <Route path='/managesubcategory' element={<ManageSubCategory/>}/>
        <Route path='/addsubcategory' element={<AddSubCategory/>}/>
        <Route path='/editsubcategory/:id' element={<EditSubCategory/>}/>

        <Route path='/singleproduct/:id' element={<ViewSingleProduct/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/manageproduct' element={<ManageProduct/>}/>
        <Route path='/editproduct/:id' element={<EditProduct/>}/>

        <Route path='/addcoupon' element={<AddCoupon/>}/>
        <Route path='/singlecoupon/:id' element={<ViewSingleCoupon/>}/>
        <Route path='/managecoupon' element={<ManageCoupon/>}/>
        <Route path='/editcoupon/:id' element={<EditCoupon/>} />

        <Route path='/userviewsubcategory/:id' element={<UserViewSubCategory/>}/>
        <Route path='/userviewproduct/:id' element={<UserViewProduct/>}/>
        <Route path='/userviewcoupon' element={<UserViewCoupon/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>



        <Route path='/userviewcategory' element={<UserViewCategory/>}/>
        <Route path='/skincare' element={<SkinCare/>} />
        


        <Route path='/apiservices' element={<ApiServices/>}/>
        </Route>

        </Routes>
      <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
        </BrowserRouter>
      );
    }

export default App;
