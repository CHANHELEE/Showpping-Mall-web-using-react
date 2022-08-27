import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducer/productReducer'
import {configureStore} from "@reduxjs/toolkit"


// let store = createStore(productReducer,applyMiddleware(thunk));

// export default store;

const store=configureStore({
  reducer:{
    product:productReducer
  }
})

export default store;