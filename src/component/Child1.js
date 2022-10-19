import React from 'react'

function Child1(props) {
    console.log(props)
  return (
    <>
    <h1>Child1</h1>
    {props.children}
    </>
  )
}

export default Child1