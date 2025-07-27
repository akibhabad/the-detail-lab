function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 style={{textAlign: 'center', fontSize: '2.5em', marginBottom: '2rem'}}>Contact Us</h1>
        
        <div style={{maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div className="service-card" style={{textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', border: '2px solid #023e8a'}}>
            <h3>📞 Phone (Call or Text)</h3>
            <div className="service-price" style={{fontSize: '1.4em', fontWeight: 'bold'}}>
              <a href="tel:+18605606294" style={{color: 'inherit', textDecoration: 'none'}}>
                (860) 560-6294
              </a>
            </div>
          </div>
          <div className="service-card" style={{textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', border: '2px solid #023e8a'}}>
            <h3>📧 Email</h3>
            <div className="service-price" style={{fontSize: '1.4em', fontWeight: 'bold'}}>
              <a href="mailto:efagin19@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>
                efagin19@gmail.com
              </a>
            </div>
          </div>
          <div className="service-card" style={{textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', border: '2px solid #023e8a'}}>
            <h3>📍 Service Area</h3>
            <div className="service-price" style={{fontSize: '1.4em', fontWeight: 'bold'}}>Greater Hartford Area</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

