import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
function Profile() {
    console.log(useLocation());
    const [data,setData]=useState(useLocation().state);
    return (
    <h1>{JSON.stringify(data)}</h1>

  )
}

export default Profile