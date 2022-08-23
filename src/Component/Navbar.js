import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Navbar = ({authentication}) => {
  const menus =["여성","Divided","남성","유아","아동","H&M Home","Sale","지속가능성"];

  const navigate = useNavigate();
  const goToHomeByLogo = () => {
    return navigate('/')
  }

  return (
    <div>
      <a href='/login'> 
        <div className="login-button">
        { authentication==false ? [<FontAwesomeIcon icon={faUser} className = "login-icon" /> ,<div>로그인</div>] 
        : [<FontAwesomeIcon icon={faUser} className = "login-icon" /> ,<div>로그아웃</div> ]}
        </div>
      </a>

      

      <div className="logo" onClick={goToHomeByLogo}> 
       <img width="150px" src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg" ></img>
      </div>

      <div className="menuArea">
          <ul className="menu">
            {menus.map((item)=><li key={item}>{item}</li>)}
          </ul>

      <div className="search">
          <div>
            <FontAwesomeIcon icon={faSearch}/>
          </div>
          <input type="text" placeholder='제품검색' ></input>
        </div>
      </div>
    
    </div>
  )
}

export default Navbar