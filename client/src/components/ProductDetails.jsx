import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ProductDetails = () => {
let [pdata,setpdata]=useState({})
    let {id}=useParams()

    useEffect(()=>{
       axios.get(`http://localhost:2025/products/productDetails/${id}`)
       .then((res)=>{setpdata(res.data)})
       .catch((err)=>console.log('data not get some issues facing in server',err))

},[])
  return (
    <div>
      <h1>product-details page</h1>
      <p>Lorem, ipsum dolorlor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptamenda cum libero, optio cupiditate soluta dolor!.</p>
    {
        <div className="div">
            <img src={pdata.image_url} alt="" className='size-[300px]' />
            <p>{pdata.name}</p>
            <p>{pdata.price}</p>
            <p>{pdata.model}</p>
            <p>{pdata.color}</p>
        </div>
    }
    </div>
  )
}

export default ProductDetails
