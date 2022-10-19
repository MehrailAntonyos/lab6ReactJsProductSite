import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

function Login() {

    var navigate=useNavigate();
    var path=useLocation().state?.pathname||'/';
    console.log(path);

    function go()
    {
        localStorage.setItem("token","abc");
        navigate(path);
        //navigate("/profile",{state:{id:1,name:"negm"}});

    }
  return (
    <>
    <h1>Please Login</h1>

    <button onClick={go}> go to profile</button>


    </>
  )
}

export default Login