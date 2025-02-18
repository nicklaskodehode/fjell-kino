import './Navbar.css'
import { Link } from 'react-router-dom'
import { Accessibility } from './Accessibility';

export const Navbar = () => {
    return (
      <div className="navbarContainer">
        <div className="header">
          <h1><a className='headerTitle' href='/home'>Fjell Kino</a></h1>
          <div className="navLinks">
            <Link to="/home">Home</Link> | <Link to="/tickets">Tickets</Link> |{" "}
            <Link to="/about">About Us</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </div>
          <div><Accessibility/></div>
        </div>
       
      </div>
    );
}