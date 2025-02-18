import './Navbar.css'
import { Link } from 'react-router-dom'
import { Accessibility } from './Accessibility';

export const Navbar = () => {
    return (
      <div className="navbarContainer">
        <div className="header">
          <h1><a className='headerTitle' href='fjellkino/'>Fjell Kino</a></h1>
          <div className="navLinks">
            <Link to="fjellkino/">Home</Link> | <Link to="/tickets">Tickets</Link> |{" "}
            <Link to="fjellkino/about">About Us</Link> |{" "}
            <Link to="fjellkino/contact">Contact</Link>
          </div>
          <div><Accessibility/></div>
        </div>
       
      </div>
    );
}