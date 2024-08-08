import { ClipLoader } from "react-spinners"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from "../../ApiServices";
export default function Dashboard(){
    const [loading,setLoading]=useState(true)
    const override={
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
    const [products,setProducts]=useState()
    const [orders,setOrders]=useState()
    const [customers,setCustomers]=useState()
    useEffect(()=>{
        ApiServices.getDashboard().then((res)=>{
            setLoading(false)
            setProducts(res.data.totalproduct)
            setOrders(res.data.totalcategory)
            setCustomers(res.data.totalCustomer)
            // console.log(data)
        }).catch((error)=>{
            console.log(error)
            toast.error("Something went Wrong!!")
            setTimeout(()=>{
                setLoading(false)
            },2000)
        })
    },[])
    return(
        <>
            <div className="page-head_agile_info_w3l">
                <div className="container">
                    <h3>
                    Admin <span>Dashboard </span>
                    </h3>
                    <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <ul className="w3_short">
                        <li>
                            <Link to={"/admin"}>Home</Link>
                            <i>|</i>
                        </li>
                        <li>Dashboard</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-5">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
 </div>     
                 <div className={loading?"disabled-screen":""}>
        
            <div className="container-fluid my-5"style={{marginTop:"4rem",marginBottom:"4rem"}}>

                <div className="row text-center">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 my-3 ">
                        <div className="card text-center">
                            <h1 className="card-title">Total Products</h1>
                            <div className="card-body text-center">
                                <h1>{products}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 my-3">
                        <div className="card">
                            <h1 className="card-title">Total Category</h1>
                            <div className="card-body text-center">
                                <h1>{orders}</h1>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-5 my-5">
                        <div className="card">
                            <h1 className="card-title">Total Users</h1>
                            <div className="card-body text-center">
                                <h1>{customers}</h1>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}