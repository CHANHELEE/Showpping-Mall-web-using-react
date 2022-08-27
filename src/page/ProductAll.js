import React from 'react'
import ProductCard from '../component/ProductCard'
import { useEffect,useState } from 'react'//api 호출은 useEffect 사용
import { useSelector } from 'react-redux';
import { Container,Row,Col } from 'react-bootstrap';
import {productAction} from '../redux/actions/productAction'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const products = useSelector(state=>state.product.productList);
  const [query,setQuery]=useSearchParams();
  const dispatch = useDispatch();
  const getProducts =  () =>{
    let searchQuery = query.get('q') || "";    
    console.log(searchQuery);
    dispatch(productAction.getProduct(searchQuery));
    // setProducts(data);
    
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