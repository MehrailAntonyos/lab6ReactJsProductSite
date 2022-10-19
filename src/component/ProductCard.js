// using pop up message madal from link : https://www.positronx.io/react-js-bootstrap-modal-popup-component-tutorial/

import React from 'react'
import { useNavigate } from 'react-router-dom'
// import React from 'react';
import { Modal, Button } from 'react-bootstrap'

function ModalDialog() {

}
function ProductCard({ data }) {
  let nav = useNavigate();

  function go(data) {
    nav('/product', { state: data });
  }
  function showProductDetails(details) {
    return (
      <></>
    )
  }

  const [isShow, invokeModal] = React.useState(false)
  const initModal = (data) => {
    invokeModal(!isShow)
  }

  return (
    <div className='container'>
      <div className="card" style={{ width: "100%" }}>
        <img className="card-img-top" src={data.images[0]} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <p className="card-text">{data.price}</p>
          <button onClick={() => { showProductDetails(data) }} className="btn btn-primary">show product details</button>

          <Button variant="success" onClick={()=> {initModal(data)}}>
            Open Modal
          </Button>
          <Modal show={isShow}>
            <Modal.Header closeButton onClick={initModal}>
              <Modal.Title>React Modal Popover Example</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {data.title}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={initModal}>
                Close
              </Button>
              <Button variant="dark" onClick={initModal}>
                Store
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>
    </div>
  )
}

export default ProductCard