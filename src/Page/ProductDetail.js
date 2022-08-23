import React from 'react'
import { useEffect,useState } from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap';
import {useParams} from "react-router-dom";
const ProductDetail = () => {
  const {id}=useParams();
  console.log(id)
  const [item , setItem]= useState([]);

  let getDetailItem= async ()=>{
    let url = new URL(`http://localhost:3004/products/${id}`);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setItem(data);

  }
  useEffect(()=>
  {
    getDetailItem();
  },
  [])



  return (

      <div className="detail-container">
        <Row className="detail-row"> 
          <Col lg={5} >
            <img src={item.img} />
          </Col> 

          <Col lg={7} className="detail-text">
            <div>{item.title}</div>
            <div>{item.price}</div>

            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <button>추가</button>
          </Col>
        </Row>
        </div>


  )
}

export default ProductDetail