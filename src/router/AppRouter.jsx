import React, { useEffect, useState } from 'react'
import Main from '../pages/Main'
import NewProduct from '../pages/NewProduct'
import ProductList from '../pages/ProductList'
import UpdateProduct from '../pages/UpdateProduct'
import MyNavbar from '../components/MyNavbar';
import axios from 'axios';
import About from '../pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import spinner from '../assets/loading.gif'


const AppRouter = () => {
    const [newProduct, setNewProduct] = useState([])
    const [loading, setLoading] = useState(true)

    //! GET (READ)\\
    const BASE_URL = "https://65f4c515f54db27bc0224f20.mockapi.io/products"


    const getData = async () => {

        const res = await axios.get(BASE_URL)
        // console.log(res.data);

        setNewProduct(res.data)
        setLoading(false)

    }
    useEffect(() => {
        getData()
    }, [])

    if (loading) {
        return (
            <div className=' text-center mt-5'>
                <img src={spinner} alt="" width="100px" />
            </div>
        )

    }

    //! POST (CREATE)\\

    const postData = async (newData) => {
        await axios.post(BASE_URL, newData)
        getData()
    }

    //! DELETE (Remove from database)\\

    const deleteData = async (id) => {

        await axios.delete(`${BASE_URL}/${id}`)
        getData()

    }



  return (
      <div>
          <Router>
              <MyNavbar />
              <Routes>
                  <Route exact path='/' element={<Main />} />
                  <Route path='/newproduct' element={<NewProduct postData={postData} />} />
                  <Route path='/productlist' element={<ProductList newProduct={newProduct} setNewProduct={setNewProduct} deleteData={deleteData} getData={getData} postData={postData}/>} />
                  <Route path='/updateproduct' element={<UpdateProduct newProduct={newProduct} setNewProduct={setNewProduct} />} />
                  <Route path='/about' element={<About />} />
              </Routes>
          </Router>

      </div>
  )
}

export default AppRouter