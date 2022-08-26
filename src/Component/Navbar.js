import {React,useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate,Navigate } from 'react-router-dom'


const Navbar = ({authentication,setAuthentication}) => {
  const menus =["여성","Divided","남성","유아","아동","H&M Home","Sale","지속가능성"];
  let [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const goToHomeByLogo = () => {
    return navigate('/')

  }

  const goToLogin= () => {
    return navigate('/login');
  }

  const logOut = () => {
    setAuthentication(false);
  }

  const search = (event) => {
    if(event.key=="Enter"){
      navigate(`/?q=${event.target.value}`)
    }
  } 



  return (
    <div >
        <div className="login-button" >
        { authentication==false ? [<FontAwesomeIcon icon={faUser} className = "login-icon"  onClick={goToLogin}/> ,<div onClick={goToLogin}>로그인</div>] 
        : [<FontAwesomeIcon icon={faUser} className = "login-icon" onClick={logOut} /> ,<div onClick={logOut}>로그아웃</div> ]}
        </div>

      

      <div className="logo" onClick={goToHomeByLogo}> 
       <img width="150px" src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" ></img>
      </div>

      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menus.map((menu, index) => 
            <button key={index}>{menu}</button>
          )}
        </div>
      </div>

      <div className="menu-mobile" onClick={() => setWidth(150)}>
      <FontAwesomeIcon icon={faBars} />
      <div className="search">
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch}/>
        </div>
          <input type="text" placeholder='제품검색' onKeyPress={(event) => search(event)} ></input>
        </div>
      </div>

      <div className="menuArea">
          <ul className="menu">
            {menus.map((item,index)=>

              <li key={index}>{item}</li>)
            }
          </ul>

      <div className="search">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch}/>
          </div>
          <input type="text" placeholder='제품검색' onKeyPress={(event) => search(event)} ></input>
      </div>
      </div>
    
    </div>
  )
}

export default Navbar