import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const menus =["여성","Divided","남성","유아","아동","H&M Home","Sale","지속가능성"]

  return (
    <div>

      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>

      <div className="logo"> 
        <a href="/"><img width="150px" src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"></img></a>
      </div>

      <div className="menuArea">
          <ul className="menu">
            {menus.map((item)=><li key={item}>{item}</li>)}
          </ul>

      <div className="search">
          <div>
            <FontAwesomeIcon icon={faSearch}/>
          </div>
          <input type="text" placeholder='제품검색'></input>
        </div>
      </div>
    </div>
  )
}

export default Navbar