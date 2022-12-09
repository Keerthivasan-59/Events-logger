import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user)

  const logout=()=>{ 
    localStorage.clear()
    setUser(null)
  }
  return (
    <div className="navContainer">
      <div className="nav">
        <div className="header">Events Logger</div>
        {user ? (
          <div className="profile">
            <div className="welcome">Welcome {user.result.name}</div>
            <div className="logout"><button onClick={logout}>Logout</button> </div>
          </div>
        ) : (
          <div className="login">
            <Link to='/auth'><button>Sign In</button></Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar