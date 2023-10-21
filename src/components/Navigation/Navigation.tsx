import { Link } from 'react-router-dom';

import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

import "./Navigation.css";


const Navigation = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={logo} alt="our logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      </ul>
    <div className="avatar">
      <img src={avatar} alt="Your avatar" />
    </div>
  </nav>

  );
};

export default Navigation;
