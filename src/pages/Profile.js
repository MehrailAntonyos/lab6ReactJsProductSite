import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { favContext } from '../config/favContext';
import { useSelector } from 'react-redux'
import ProductCard from '../component/ProductCard';

function Profile() {
  console.log(useLocation());
  const [data, setData] = useState(useLocation().state);
  const { fav, setFav } = useContext(favContext);
  const favData = useSelector(state => state.favReducer.fav);
  console.log(favData, "dwwdwd")

  return (

    <div className='row'>
      {
        favData.map((item) => <div className='col-4 mt-3' ><ProductCard type="fav" data={item} /></div>)
      }</div>
  )
}

export default Profile