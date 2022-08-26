import Login from './page/Login';
import ProductAll from './page/ProductAll';
import {useState,useEffect} from 'react';
import Navbar from './component/Navbar';
import {Route,Routes,useNavigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRouter from './privateRoute/PrivateRouter';
/**
 *1.유저는 메뉴와 상품들을 볼 수 있다.
  1-2 . 네비게이션바(헤더)  
  2.유저는 로그인을 할 수 있다.
  3.유저는 상품디테일을 보기 위해 로그인을 해야한다.
  4.로그인한 유저는 상품디테일정보를 볼 수 있다.
  5.유저는 상품을 검색할 수 있다.(상품명 입력후 Enter)
  6.유저는 로그아웃할 수 있다. (로그인 페이지로 redirect)
  7.로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다. 
 * 전체상품페이지, 로그인페이지, 상품상세페이지 가 필요하다.
 * 
 * 
  
 */
function App() {
  const navigate = useNavigate();
  let [authentication , setAuthentication] = useState(false);

  let goToProductAllpage = () =>{
    navigate('/');
  }

  useEffect(() => 
  {
    if(authentication){
      goToProductAllpage();}
    //  }else{
    //   alert('이메일혹은 비밀번호를 재확인 하세요.')
    // }
  }
  ,[authentication]);



  return (
    <div >
    <Navbar authentication={authentication} setAuthentication={setAuthentication}/>
      <Routes>
        <Route path="/" element={<ProductAll authentication={authentication} setAuthentication={setAuthentication}/>}></Route>
        <Route path="/product/:id" element={<PrivateRouter authentication={authentication}/>}></Route>
        <Route path="/login" element={<Login authentication={authentication} setAuthentication={setAuthentication}/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
