import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <div className="logo-container">
            <Image 
              src="/images/logo.png" 
              alt="Detail Lab Logo" 
              width={scrolled ? 40 : 60}
              height={scrolled ? 40 : 60}
              className="logo-image" 
            />
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

