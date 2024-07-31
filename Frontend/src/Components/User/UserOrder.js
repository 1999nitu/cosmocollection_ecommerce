import { useEffect, useState } from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import ApiServices, { BASE_URL } from "../ApiServices";


export default function UserOrder(){
    const [loading,setLoading]=useState(true)
    const override={
        
        "display":"block",
        margin:"0 auto",
        "zIndex":"1",
    }
    const user_type=sessionStorage.getItem('user_type')
    const [orders,setOrders]=useState()
    const {id}=useParams()
    useEffect(()=>{
        if(user_type==2 || user_type=="2"){
            var data={
                orderId:id
            }
        }
        ApiServices.vieworder(data).then((res)=>{
            setOrders(res.data.data)
            setTimeout(()=>{
                setLoading(false)
            },1000)
        }).catch((err)=>{
            console.log(err)
            toast.error("Something went wrong!!")
             setTimeout(()=>{
                setLoading(false)
            },1000)
        })
    },[loading])
    const token=sessionStorage.getItem("token")
    const nav=useNavigate()
    useEffect(()=>{
        if(!token){
            sessionStorage.setItem("message","Please login First")
            nav("/login")
        }
    },[])
    return(
        <>
        <div className="page-head_agile_info_w3l">
                <div className="container">
                    <h3>
                    User <span>Orders </span>
                    </h3>
                    <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <ul className="w3_short">
                        <li>
                            <Link to={"/admin"}>Home</Link>
                            <i>|</i>
                        </li>
                        <li>Orders</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-5">
                <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div>     
                 <div className={loading?"disabled-screen":""}>
         
            <div className="container my-5 table-responsive">
                <table className="table table-hover table-bordered table-striped ">
                    <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Image</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
                        <th>Address </th>
                        {/* <th>Delete</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    {orders?.map((el,index)=>(
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>
                                <img src={BASE_URL +el?.productId?.productImage} style={{height:"100px", width:"100px"}}/>

                            </td>
                            <td>{el?.productId?.name}</td>
                            <td>{el.quantity}</td>
                            <td>&#8377;{el?.price}</td>
                            <td>&#8377;{el?.price*el.quantity}</td>
                            <td>{el?.productId?.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}