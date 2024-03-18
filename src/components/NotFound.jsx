import React from 'react'
import notFound from '../assets/notFound.jpeg'

const NotFound = () => {
    return (
        <div className="message-div ">
             <img className='rounded-4' src={notFound} alt="" width="500px"/>
        </div>
    )
}

export default NotFound