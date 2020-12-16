import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>LOGO HERE</Link>
      </div>
      <div className = "links">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Menu & Locations</li>
        <li>Gallery</li>
        <li>Events</li>
        <li>Contact Us</li>
        </ul>
      </div>
      <div className="auth">
        <ul>
          { props.currentUser ? 
            <>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
            </>
          :
            <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
