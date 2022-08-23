import React from 'react'
import ProductCard from '/Users/lee/Desktop/Study/react/shopping_mall/src/Component/ProductCard.js'
import { useEffect,useState } from 'react'//api 호출은 useEffect 사용
import { Container,Row,Col } from 'react-bootstrap';
const ProductAll = ({authentication}) => {
  const[products,setProducts]= useState([]);

  const getProducts = async () =>{
    
    console.log(authentication);
    let url = new URL("http://localhost:3004/products");
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  }
  useEffect(() =>
  {
    getProducts()
  }
  ,[])



  return (
    <div>
      <Container>
        <Row>
            {products.map(product => <Col lg={3}> <ProductCard product={product} authentication={authentication}/> </Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll