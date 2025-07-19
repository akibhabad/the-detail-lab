import { Link } from 'react-router-dom';

function HomePage() {
  const slides = [
    { src: "/images/IMG_2708.JPG", alt: "Car detailing service 1" },
    { src: "/images/IMG_2739.JPG", alt: "Car detailing service 2" },
    { src: "/images/IMG_2760.JPG", alt: "Car detailing service 3" },
    { src: "/images/IMG_2790.JPG", alt: "Car detailing service 4" }
  ];

  return (
    <div className="home-page gradient-bg">
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Mobile Car Detailing</h1>
          <p>Professional car detailing services that come to you. We bring the showroom shine to your doorstep.</p>
          <Link to="/contact" className="cta-button">Book Now</Link>
        </div>
      </section>
      
      <section className="slideshow-section">
        <div className="container">
          <div className="slideshow-container">
            <div className="slideshow-placeholder">
              {slides.map((slide, index) => (
                <div key={index} className={`slide-placeholder ${index === 0 ? 'active' : ''}`}>
                  <img 
                    src={slide.src} 
                    alt={slide.alt}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-fallback" style={{display: 'none'}}>
                    <span>Image Loading...</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="slideshow-controls">
              <button className="slide-btn prev-btn">‹</button>
              <div className="slide-indicators">
                {slides.map((_, index) => (
                  <span key={index} className={`indicator ${index === 0 ? 'active' : ''}`}></span>
                ))}
              </div>
              <button className="slide-btn next-btn">›</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="intro">
        <div className="container">
          <h2>Why Choose The Detail Lab?</h2>
          <p>We provide top-quality mobile car detailing services using premium products and professional techniques. Our experienced team ensures your vehicle looks its absolute best.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;