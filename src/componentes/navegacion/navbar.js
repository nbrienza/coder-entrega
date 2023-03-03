import react from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  imagenes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  catalogo
                </Link>
              </li>
            </ul>
          </nav>
        );
      }

export default Navbar


