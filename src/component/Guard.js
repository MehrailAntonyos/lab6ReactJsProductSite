import React from 'react'
import { Navigate,useLocation } from 'react-router-dom';

function Guard(props) {
    var path=useLocation().pathname;
    console.log(path);
 let token=localStorage.getItem("token");
 if(!token)
 {
    return <Navigate to='/login' state={{pathname:path}} />
 }
 else
 return props.children;
    

}

export default Guard