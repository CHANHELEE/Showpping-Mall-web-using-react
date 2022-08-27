import {productActions} from '../reducer/productReducer'

function getProduct(searchQuery){
  return async(dispatch,getState) => {
    let url = new URL(`https://my-json-server.typicode.com/CHANHELEE/Showpping-Mall-web-using-react/products?q=${searchQuery}`);
    let response = await fetch(url);
    let data = await response.json();
    // dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
    dispatch(productActions.getAllProduct({data}));
  }
}

export const productAction={getProduct}