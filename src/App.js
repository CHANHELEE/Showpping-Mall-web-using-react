import Login from './Page/Login';
import ProductAll from './Page/ProductAll';
import ProductDetail from './Page/ProductDetail';
import Navbar from './Component/Navbar';
import {Route,Routes} from 'react-router-dom';
import './App.css';
/**
 *1.유저는 메뉴와 상품들을 볼 수 있다.
  1-2 . 네비게이션바  
  2.유저는 로그인을 할 수 있다.
  3.유저는 상품디테일을 보기 위해 로그인을 해야한다.
  4.로그인한 유저는 상품디테일정보를 볼 수 있다.
  5.유저는 상품을 검색할 수 있다.
  6.유저는 로그아웃할 수 있다. (로그인 페이지로 redirect)
  7.로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다. 
 * 전체상품페이지, 로그인페이지, 상품상세페이지 가 필요하다.
 * 
 */
function App() {
  return (
    <div >
    <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
