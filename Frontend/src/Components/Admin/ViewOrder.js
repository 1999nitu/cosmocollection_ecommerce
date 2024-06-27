import { useEffect, useState } from "react"
import ApiServices from "../ApiServices"
import { toast } from "react-toastify"

export default function ViewOrder(){
    const [data,setData]=useState([])

    useEffect(
        ()=>{
            getData()
    },[]
    )

    const getData=()=>{
        ApiServices.vieworder(data)
        .then((res)=>{
            setData(res.data.data)
            console.log("data",res)
        })
        .catch((err)=>{
        console.log(err)

        })}
    const changeStatus=(id,status)=>{
        let data={
            _id:id,
            orderStatus:status

        }
        ApiServices.orderstatus(data)
        .then((res)=>{
            if(res.data.success)
                {
                    toast.success(res.data.message)
                    getData()
                }
                else{
                    toast.error(res.data.message)
                }

        })
        .catch((err)=>{
            console.log(err)
        })
    }

const approved=(id,status)=>{
    let data={
        _id:id,
        orderStatus:status

    }
    ApiServices.orderplace(data)
    .then((res)=>{
        if(changeStatus=2)
            {
                approved()
            }
            else{
                toast.success(res.data.message)
            }
    })
}
    // const changeStatus=(id,status)=>{
    //     // console.log("btn clicked",id,!status);
    //     let data={
    //         _id:id,
    //         status:!status
    //     }
    //     console.log(data);
    
    //     ApiServices.deleteData(data)
    //     .then((res)=>{
    //         if(res.data.success)
    //             {
    //                 toast.success(res.data.message)
    //                 // getData()
    //             }
    //             else{
    //                 toast.error(res.data.message)
    //             }
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

    
    return(
        <>
            <h1><center>View All Orders </center></h1><br/>
            <div className="container table-responsive">
             <table className="table table-striped table-hover table-bordered">
                 <thead className="table-dark">
                     <tr>
                     <th> Sno</th>
                     <th> User Details</th>
                     <th> Total Price</th>
                     <th> Status</th>
                     <th> Address</th>
                    <th>Action</th>
                     </tr>
                 </thead>
                 <tbody>
                     {data?.map(
                         (el,index)=>
                            (
                             <tr>
                                 <td>{index+1}</td>
                                 <td>{el.name}{el.address}</td>
                                 <td> {el.totalPrice}</td>
                                 <td>{el.status}</td>
                                 <td>{el.address}</td>
                                 <td>
                                    <button className="btn btn-success" onClick={
                                        ()=>{
                                            changeStatus(el._id,2)
                                    }}> Approve</button>
                                    <br/><br/>
                                 <button className="btn btn-danger" onClick={
                                    ()=>{
                                        changeStatus(el._id,5)
                                    }
                                 }>Decline</button></td>
                                 <td>
                                    <button className="btn btn-warning" onClick={
                                        ()=>{
                                            approved()
                                        }
                                    }>Shipped</button><br/><br/>

                                    <button className="btn btn-success" onClick={
                                        ()=>{
                                            approved()
                                        }
                                        }>Delivered</button>
                                </td>
                             </tr>
                             
                         )
                     )}
                 </tbody>
             </table><br/>
           </div>
          
        </>
    )
}