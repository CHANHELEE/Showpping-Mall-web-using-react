import React from 'react'
import { useEffect,useState } from 'react'
import { Container,Row,Col,Form } from 'react-bootstrap';
import {useParams} from "react-router-dom";
const ProductDetail = () => {
  const {id}=useParams();
  const [item , setItem]= useState(null);

  let getDetailItem= async ()=>{
    let url = new URL(`https://my-json-server.typicode.com/CHANHELEE/Showpping-Mall-web-using-react/products/${id}`);
    let response = await fetch(url);
    let data = await response.json();
    setItem(data);

  }
  useEffect(()=>
  {
    getDetailItem();
  },
  [])



  return (

      <Container>
        <Row> 
          <Col lg={5} className="product-img">
            <img src={item?.img} />
          </Col> 

          <Col lg={7}className="product-detail">
            <div>{item?.title}</div>
            <div>{item?.price}</div>

            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <button>추가</button>
          </Col>
        </Row>
        </Container>


  )
}

export default ProductDetail