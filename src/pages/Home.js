import React, { useEffect, useState } from 'react'
// import Child1 from '../component/Child1'

function Home() {

  const [data, setData] = useState(false);
  useEffect(() => {
    console.log("mount");
    return () => // init clean or fire 
    {
      console.log("clean");
    }
  }, [])
  useEffect(() => {
    console.log("update")
  }, [data]);
 
  return (
    <>
      <h1>Welcome in Home Page</h1>
    </>
  )
}

export default Home