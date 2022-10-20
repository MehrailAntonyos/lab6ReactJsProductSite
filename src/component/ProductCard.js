// using pop up message madal from link : https://www.positronx.io/react-js-bootstrap-modal-popup-component-tutorial/

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import { favContext } from '../config/favContext';
import { useDispatch } from 'react-redux'
import { addFav } from '../Redux/Actions/favAction';

function ProductCard({ data, type }) {
  let nav = useNavigate();

  function go(data) {
    nav('/product', { state: data });
  }

  console.log(data);
  console.log(type);
  const dispatch = useDispatch();
  const { fav, setFav } = useContext(favContext);

  const [isShow, invokeModal] = React.useState(false)
  const initModal = (data) => {
    invokeModal(!isShow)
  }

  function add(data) {
    console.log("add data...");
    dispatch(addFav(data));

  }

  return (
    <div className='container'>
      <div className="card" style={{ width: "100%" }}>
        <img className="card-img-top" src={data.images[0]} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <p className="card-text">{data.price}</p>
          {!type && <button onClick={() => { add(data)}} className="btn btn-primary">Add to favourite</button>}

          <Button variant="success" onClick={() => { initModal(data) }}>
            Show product details
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