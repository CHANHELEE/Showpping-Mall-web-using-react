import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
const PrivateRouter = ({authentication}) => {
  return authentication ? <ProductDetail/> : <Navigate to="/login"/>
    
  
}

export default PrivateRouter