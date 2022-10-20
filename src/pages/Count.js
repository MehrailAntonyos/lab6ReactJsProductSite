import React, { useContext } from 'react'
import { countContext } from '../config/countContext'
import {useDispatch} from 'react-redux'
import { addCount } from '../Redux/Actions/counterAction';

function Count() {

    const {count,setCount}=useContext(countContext);
    
    const dispatch=useDispatch();
    function add()
    {
        console.log(count);
       setCount(count+1);
       dispatch(addCount())


    }
  return (
    <div>

        <h1>Count</h1>
        <button onClick={add}> add</button>
    </div>
  )
}

export default Count