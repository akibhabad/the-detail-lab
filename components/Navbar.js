import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <div className="logo-container">
            <Image 
              src="/images/logo.png" 
              alt="Detail Lab Logo" 
              width={60}
              height={60}
              className="logo-image" 
            />
            <span className="logo-text">Detail Lab</span>
          </div>
        </Link>
        <div className="navbar-menu">
          <Link href="/" className="navbar-link">Home</Link>
          <Link href="/services" className="navbar-link">Services</Link>
          <Link href="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

