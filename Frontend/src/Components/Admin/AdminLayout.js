import { Outlet, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import AdminHeader from "./AdminHeader";
export default function AdminLayout(){
    const authenticate=sessionStorage.getItem("authenticate")
    const userType=sessionStorage.getItem("userType")
    const nav=useNavigate()
    useEffect(()=>{
        if(!authenticate){
            nav("/login",{state:{message:"Please Login to access the page"}})
        }
        if(userType!=1|| userType!="1"){
            sessionStorage.clear()
            setTimeout(()=>{
                nav("/login",{state:{message:"You cannot access this page"}})
            },1000)
        }
    },[])
   
   return(
    <>
       <AdminHeader/>
        <Outlet/>
        <Footer/>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
    </>
   )
}