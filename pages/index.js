import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home-page">
      <section className="video-hero">
        <div className="video-background">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src="/videos/websitevideo1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content" style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
          <h1 style={{ color: '#023e8a', fontSize: '4rem', fontWeight: 'bold', marginBottom: '3rem' }}>The Detail Lab</h1>
          <Link href="/contact" className="cta-button">Book Now</Link>
        </div>
        <div className="scroll-indicator">
          <div className="arrow-down"></div>
          <div className="arrow-down"></div>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <h2>Why Choose Detail Lab?</h2>
          <div className="intro-image">
            <Image 
              src="/images/A4B5C8D4-1DEB-41D7-A4C0-F8BA79951F44_1_105_c.jpeg" 
              alt="Eli Fagin - Detail Lab Owner" 
              width={400}
              height={600}
              className="owner-image"
            />
          </div>
          <p>My name is Eli Fagin, and I'm a 17-year-old recent high school graduate with a growing passion for car detailing. This summer, I've completed over 25 details and invested thousands of my own savings into professional-grade equipment to give each vehicle the highest level of care. I take pride in offering thorough, convenient service—right in your driveway. With several positive reviews and a strong commitment to quality, I'd love the opportunity to earn your trust and business. If you're looking for a detail done right while supporting a local teen-run business, please feel free to contact me</p>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <Link href="/services" className="cta-button">View Services & Packages</Link>
        </div>
      </section>
    </div>
  );
}