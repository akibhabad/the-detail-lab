import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          The Detail Lab
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
          <Link to="/equipment" className="navbar-link">Equipment</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;