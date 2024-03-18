import React from 'react'
import notFound from '../assets/notFound.jpeg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
       
            <div className="message-div ">
            <div className='mx-5'>

            <img className='rounded-4' src={notFound} alt="" width="500px" /> 
            </div>
                <div className='mt-4 text-center'>
                <button onClick={()=>navigate("/")} className='btn btn-danger mx-2 my-4 fw-bold'>GO HOME PAGE</button>
                <button onClick={() => navigate("/newproduct")} className='btn btn-primary mx-2 fw-bold'>GO ADD PRODUCT PAGE</button>
                <button onClick={() => navigate("/productlist")} className='btn btn-warning mx-2 fw-bold'>GO PRODUCT LIST PAGE</button>
                </div>
            </div>
           
             
           

      
    )
}

export default NotFound