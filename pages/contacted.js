import Link from 'next/link';

function ContactedPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <div style={{
          maxWidth: '600px', 
          margin: '4rem auto', 
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
          border: '2px solid #023e8a',
          borderRadius: '10px'
        }}>
          <h1 style={{fontSize: '2.5em', marginBottom: '2rem', color: '#ffffff'}}>
            Thank you for your interest – we'll reach out to you in less than 24 hours.
          </h1>
          <Link href="/" className="cta-button">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactedPage;