import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({product}) => {
  const  navigate = useNavigate();

  const showDetail = () =>{
    navigate(`/product/${product.id}`)
  } 

  return (
    <div onClick={showDetail} key={product.id} className="product-card">
          <img src={product.img} className="product-img"></img>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.new ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard