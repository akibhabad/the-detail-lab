import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Services() {
  const exteriorSlides = [
    { src: "/images/7DB3F5C8-2849-406E-A8EF-C1D4E3CE8ADD_1_105_c.jpeg", alt: "Car detailing service 1" },
    { src: "/images/B9B93F84-874E-4C04-A914-C07D966995AA_1_105_c.jpeg", alt: "Car detailing service 2" },
    { src: "/images/477222C4-ED61-4658-996B-2673198FE989_1_105_c.jpeg", alt: "Car detailing service 3" }
  ];

  const interiorSlides = [
    { src: "/images/IMG_2708.JPG", alt: "Car detailing service 1" },
    { src: "/images/IMG_2739.JPG", alt: "Car detailing service 2" },
    { src: "/images/IMG_2760.JPG", alt: "Car detailing service 3" },
    { src: "/images/IMG_2790.JPG", alt: "Car detailing service 4" }
  ];

  const [currentSlideExterior, setCurrentSlideExterior] = useState(0);
  const [currentSlideInterior, setCurrentSlideInterior] = useState(0);

  // Auto-advance slides every 2.5 seconds for exterior
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideExterior((prev) => (prev + 1) % exteriorSlides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [exteriorSlides.length]);

  // Auto-advance slides every 2.5 seconds for interior (offset timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideInterior((prev) => (prev + 1) % interiorSlides.length);
    }, 2700);

    return () => clearInterval(interval);
  }, [interiorSlides.length]);

  // Exterior slideshow controls
  const goToSlideExterior = (index) => {
    setCurrentSlideExterior(index);
  };

  const nextSlideExterior = () => {
    setCurrentSlideExterior((prev) => (prev + 1) % exteriorSlides.length);
  };

  const prevSlideExterior = () => {
    setCurrentSlideExterior((prev) => (prev - 1 + exteriorSlides.length) % exteriorSlides.length);
  };

  // Interior slideshow controls
  const goToSlideInterior = (index) => {
    setCurrentSlideInterior(index);
  };

  const nextSlideInterior = () => {
    setCurrentSlideInterior((prev) => (prev + 1) % interiorSlides.length);
  };

  const prevSlideInterior = () => {
    setCurrentSlideInterior((prev) => (prev - 1 + interiorSlides.length) % interiorSlides.length);
  };
  const exteriorServices = [
    {
      id: 1,
      title: "Basic Exterior Wash",
      price: "$75",
      description: "A hand wash using ph neutral soap, tires and rims cleaned, and a spot-free rinse"
    },
    {
      id: 2,
      title: "Clay & Hydro Sealant Package",
      price: "$100",
      description: "Basic exterior wash with an additional clay treatment + 5-month hydrophobic sealant for extra shine & protection."
    }
  ];

  const interiorServices = [
    {
      id: 3,
      title: "Basic Interior Detail",
      price: "$100",
      description: "Thorough Vacuuming, wipe down of all surfaces, windows, and mats."
    },
    {
      id: 4,
      title: "Deep Interior Clean",
      price: "Starting at $135",
      description: "Includes dressing applied to vinyl, plastic and rubber, second deeper vacuuming stage. And very light stain removal.",
      addOns: ["Pet Hair Removal: $20 - 40", "Severe Stain Treatment – Quote upon inspection"]
    }
  ];

  const fullPackages = [
    {
      id: 5,
      title: "Mini Full Detail",
      subtitle: "(Interior + Exterior Basic)",
      price: "$175",
      description: "Best for regular maintenance."
    },
    {
      id: 6,
      title: "Premium Full Detail",
      subtitle: "(Interior Deep + Exterior Clay & Sealant)",
      price: "$235+",
      description: "Deep clean inside and out for full rejuvenation of vehicle."
    }
  ];

  const extrasUpgrades = [
    {
      id: 7,
      title: "Engine Bay Cleaning",
      price: "$50",
      description: "Professional engine bay cleaning and dressing for a showroom-quality finish."
    },
    {
      id: 8,
      title: "Headlight Restoration",
      price: "$40/pair",
      description: "Restore cloudy, yellowed headlights to improve visibility and appearance."
    },
    {
      id: 9,
      title: "Trim Restoration",
      price: "$35",
      description: "Professional trim restoration to bring back that fresh look."
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <h1 style={{textAlign: 'center', fontSize: '2.5em', marginBottom: '10px'}}>Our Services</h1>
        <p className="page-intro" style={{textAlign: 'center', color: '#666', fontSize: '0.9em'}}>
          (All prices are based off of a sedan, larger vehicles may be $20+)
        </p>
        
        {/* Exterior Detailing */}
        <section className="service-category-section">
          <br />
          <h2>🚗 Exterior Detailing</h2>
          <div className="services-grid">
            {exteriorServices.map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <div className="service-price">{service.price}</div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          
          {/* Exterior Gallery */}
          <div className="service-gallery" style={{marginTop: '40px'}}>
            <div className="slideshow-container">
              <div className="slideshow-placeholder">
                {exteriorSlides.map((slide, index) => (
                  <div key={index} className={`slide-placeholder ${index === currentSlideExterior ? 'active' : ''}`}>
                    <Image 
                      src={slide.src} 
                      alt={slide.alt}
                      width={600}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      priority={index === 0}
                      quality={85}
                    />
                  </div>
                ))}
              </div>
              <div className="slideshow-controls">
                <button className="slide-btn prev-btn" onClick={prevSlideExterior}>‹</button>
                <div className="slide-indicators">
                  {exteriorSlides.map((_, index) => (
                    <span 
                      key={index} 
                      className={`indicator ${index === currentSlideExterior ? 'active' : ''}`}
                      onClick={() => goToSlideExterior(index)}
                    ></span>
                  ))}
                </div>
                <button className="slide-btn next-btn" onClick={nextSlideExterior}>›</button>
              </div>
            </div>
          </div>
        </section>

        {/* Interior Detailing */}
        <section className="service-category-section indented">
          <br />
          <h2>🧼 Interior Detailing</h2>
          <div className="services-grid">
            {interiorServices.map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <div className="service-price">{service.price}</div>
                <p>{service.description}</p>
                {service.addOns && (
                  <div className="add-ons">
                    <strong>Add-Ons:</strong>
                    <ul>
                      {service.addOns.map((addOn, index) => (
                        <li key={index}>{addOn}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interior Gallery */}
          <div className="service-gallery" style={{marginTop: '40px'}}>
            <div className="slideshow-container">
              <div className="slideshow-placeholder">
                {interiorSlides.map((slide, index) => (
                  <div key={index} className={`slide-placeholder ${index === currentSlideInterior ? 'active' : ''}`}>
                    <Image 
                      src={slide.src} 
                      alt={slide.alt}
                      width={600}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      priority={index === 0}
                      quality={85}
                    />
                  </div>
                ))}
              </div>
              <div className="slideshow-controls">
                <button className="slide-btn prev-btn" onClick={prevSlideInterior}>‹</button>
                <div className="slide-indicators">
                  {interiorSlides.map((_, index) => (
                    <span 
                      key={index} 
                      className={`indicator ${index === currentSlideInterior ? 'active' : ''}`}
                      onClick={() => goToSlideInterior(index)}
                    ></span>
                  ))}
                </div>
                <button className="slide-btn next-btn" onClick={nextSlideInterior}>›</button>
              </div>
            </div>
          </div>
        </section>

        {/* Full Packages */}
        <section className="service-category-section indented">
          <br />
          <h2>🚘 Full Packages</h2>
          <div className="services-grid">
            {fullPackages.map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.title}</h3>
                {service.subtitle && <h4 className="service-subtitle">{service.subtitle}</h4>}
                <div className="service-price">{service.price}</div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Extras & Upgrades */}
        <section className="service-category-section indented">
          <br />
          <h2>🧩 Extras & Upgrades</h2>
          <div className="services-grid">
            {extrasUpgrades.map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <div className="service-price">{service.price}</div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Equipment */}
        <section className="service-category-section indented">
          <br />
          <h2>🔧 Professional Equipment</h2>
          <p style={{textAlign: 'center', color: '#666', marginBottom: '30px'}}>
            We use only the highest quality equipment and top-of-the-line chemicals to ensure exceptional results every time.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Interior</h3>
              <p>Ridgid Air compressor, Shop vac, Extractor, Industrial grade steamer, drill brushes, Interior brushes, Premium interior microfiber towels</p>
            </div>
            <div className="service-card">
              <h3>Exterior Equipment</h3>
              <p>1800 psi pressure washer, Foam cannon, Pump sprayer, 1200 gsm drying towels, Wheel face brush, Wheel barrel brush, Spoke specific brush, Wash mits using high quality top of the line chemicals</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

