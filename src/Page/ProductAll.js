import React from 'react'
import ProductCard from '../component/ProductCard.js'
import { useEffect,useState } from 'react'//api 호출은 useEffect 사용
import { Container,Row,Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const[products,setProducts]= useState([]);
  const [query,setQuery]=useSearchParams();

  const getProducts = async () =>{
    let searchQuery = query.get('q') || "";    
    console.log(searchQuery);
    let url = new URL(`https://my-json-server.typicode.com/CHANHELEE/Showpping-Mall-web-using-react/products?q=${searchQuery}`);
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  }
  useEffect(() =>
  {
    getProducts()
  }
  ,[query])



  return (
    <div>
      <Container>
        <Row>
            {products.map(product => <Col lg={3} key={product.id}> <ProductCard product={product}/> </Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll