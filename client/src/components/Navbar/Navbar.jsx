import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import decode from "jwt-decode";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  const navigate=useNavigate()
  const location=useLocation()
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setUser(null);
    navigate('/')
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location]);

  return (
    <div className="navContainer">
      <div className="nav">
        <div className="header">Events Logger</div>
        {user ? (
          <div className="profile">
            <div className="welcome">Welcome {user.result.name}</div>
            <div className="logout">
              <button onClick={logout}>Logout</button>{" "}
            </div>
          </div>
        ) : (
          <div className="login">
            <Link to="/auth">
              <button>Sign In</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
