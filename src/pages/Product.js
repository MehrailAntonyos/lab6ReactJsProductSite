import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { axiosInstance } from '../config/axios'

function Product() {

  const [product, setProduct] = useState([])
  useEffect(() => {

    axiosInstance.get('/products').then((res) => {
      console.log(res);
      setProduct(res.data.products)
    })
  }, [])
  return (
    <div className='row'>
      {
        product.map((item) => <div className='col-4 mt-3' ><ProductCard data={item} /></div>)
      }</div>

  )
}

export default Product