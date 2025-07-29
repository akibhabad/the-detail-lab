import { useState, useEffect } from 'react';

const ctTowns = [
  // Hartford County
  'Avon', 'Berlin', 'Bloomfield', 'Bristol', 'Burlington', 'Canton', 'East Granby', 
  'East Hartford', 'East Windsor', 'Ellington', 'Enfield', 'Farmington', 'Glastonbury', 
  'Granby', 'Hartford', 'Hartland', 'Manchester', 'Marlborough', 'New Britain', 
  'Newington', 'Plainville', 'Rocky Hill', 'Simsbury', 'South Windsor', 'Suffield', 
  'West Hartford', 'Wethersfield', 'Windsor', 'Windsor Locks',
  
  // Fairfield County
  'Bethel', 'Bridgeport', 'Brookfield', 'Danbury', 'Darien', 'Easton', 'Fairfield', 
  'Greenwich', 'Monroe', 'New Canaan', 'New Fairfield', 'Newtown', 'Norwalk', 
  'Redding', 'Ridgefield', 'Shelton', 'Sherman', 'Stamford', 'Stratford', 'Trumbull', 
  'Weston', 'Westport', 'Wilton',
  
  // Other nearby towns
  'Cromwell', 'Durham', 'Haddam', 'Higganum', 'Middletown', 'Portland', 'Wallingford', 
  'Meriden', 'North Haven', 'Hamden', 'New Haven', 'West Haven', 'Milford', 'Orange', 
  'Woodbridge', 'Bethany', 'Waterbury', 'Naugatuck', 'Prospect', 'Cheshire', 'Wolcott'
];

function ContactPage() {
  const [formData, setFormData] = useState({
    contact: '',
    town: '',
    comments: ''
  });
  const [filteredTowns, setFilteredTowns] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('/contacted');

  useEffect(() => {
    // Set the redirect URL based on current origin
    if (typeof window !== 'undefined') {
      setRedirectUrl(`${window.location.origin}/contacted`);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'town') {
      if (value.length > 0) {
        // Filter from our CT towns list
        const filtered = ctTowns.filter(town => 
          town.toLowerCase().includes(value.toLowerCase())
        ).map(town => `${town}, CT`);

        setFilteredTowns(filtered);
        setShowSuggestions(filtered.length > 0);
      } else {
        setFilteredTowns([]);
        setShowSuggestions(false);
      }
    }
  };


  const handleTownSelect = (town) => {
    setFormData(prev => ({
      ...prev,
      town: town
    }));
    setShowSuggestions(false);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 style={{textAlign: 'center', fontSize: '2.5em', marginBottom: '2rem'}}>Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-form">
            <form action="https://formsubmit.co/akibhabad7@gmail.com" method="POST">
              <input type="hidden" name="_cc" value="efagin19@gmail.com" />
              <input type="hidden" name="_subject" value="New Contact Form Submission - FG Mobile Detailing" />
              <input type="hidden" name="_next" value={redirectUrl} />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group">
                <label htmlFor="contact">Phone Number or Email *</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  placeholder="Your phone number or email address"
                />
              </div>

              <div className="form-group" style={{position: 'relative'}}>
                <label htmlFor="town">Town in Connecticut *</label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  value={formData.town}
                  onChange={handleInputChange}
                  onFocus={() => formData.town && setShowSuggestions(filteredTowns.length > 0)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  required
                  placeholder="Enter your town (Connecticut suggestions will appear)"
                />
                {showSuggestions && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: '#111111',
                    border: '1px solid #333333',
                    borderRadius: '5px',
                    maxHeight: '200px',
                    overflowY: 'auto',
                    zIndex: 1000,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                  }}>
                    {filteredTowns.map((town, index) => (
                      <div
                        key={index}
                        style={{
                          padding: '10px',
                          cursor: 'pointer',
                          borderBottom: index < filteredTowns.length - 1 ? '1px solid #333333' : 'none',
                          color: '#ffffff',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseDown={() => handleTownSelect(town)}
                        onMouseEnter={(e) => e.target.style.background = '#023e8a'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                      >
                        📍 {town}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="comments">Questions/Comments (Optional)</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your car and what services you're interested in..."
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
              
              <p style={{marginTop: '1rem', color: '#cccccc', fontSize: '0.9rem'}}>
                We'll respond in less than 24 hours.
              </p>
            </form>
          </div>

          <div className="contact-info">
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
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
                <div className="service-price" style={{fontSize: '1.4em', fontWeight: 'bold', marginTop: '0.5rem'}}>
                  <a href="mailto:akibhabad7@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>
                    akibhabad7@gmail.com
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
      </div>
    </div>
  );
}

export default ContactPage;

