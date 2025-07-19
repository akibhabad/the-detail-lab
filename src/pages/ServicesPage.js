function ServicesPage() {
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
        <h1>FG Mobile Detailing — Professional Mobile Detailing</h1>
        <p className="page-intro">
          Professional mobile car detailing services designed to keep your vehicle looking its best.
          <br />
          <em>(All prices are based off of a sedan, larger vehicles may be $20+)</em>
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
      </div>
    </div>
  );
}

export default ServicesPage;