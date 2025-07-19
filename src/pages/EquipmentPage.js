function EquipmentPage() {
  const interiorEquipment = [
    {
      id: 1,
      name: "Ridgid Air Compressor",
      description: "Professional-grade air compressor for powerful cleaning and detailing applications"
    },
    {
      id: 2,
      name: "Shop Vac",
      description: "Heavy-duty vacuum system for thorough debris and liquid removal"
    },
    {
      id: 3,
      name: "Extractor",
      description: "Deep cleaning extraction system for upholstery and carpet cleaning"
    },
    {
      id: 4,
      name: "Industrial Grade Steamer",
      description: "High-temperature steam cleaning for sanitizing and deep cleaning interior surfaces"
    },
    {
      id: 5,
      name: "Drill Brushes",
      description: "Precision brushes for detailed cleaning of hard-to-reach interior areas"
    },
    {
      id: 6,
      name: "Interior Brushes",
      description: "Specialized brushes designed for safe cleaning of delicate interior surfaces"
    },
    {
      id: 7,
      name: "Premium Interior Microfiber Towels",
      description: "Ultra-soft microfiber towels for streak-free cleaning and drying of interior surfaces"
    }
  ];

  const exteriorEquipment = [
    {
      id: 8,
      name: "1800 PSI Pressure Washer",
      description: "High-pressure washing system for effective exterior cleaning and rinsing"
    },
    {
      id: 9,
      name: "Foam Cannon",
      description: "Professional foam application system for thorough pre-wash treatment"
    },
    {
      id: 10,
      name: "Pump Sprayer",
      description: "Precision chemical application system for targeted cleaning solutions"
    },
    {
      id: 11,
      name: "1200 GSM Drying Towels",
      description: "Ultra-absorbent drying towels for scratch-free water removal"
    },
    {
      id: 12,
      name: "Wheel Face Brush",
      description: "Specialized brush for safe and effective wheel face cleaning"
    },
    {
      id: 13,
      name: "Wheel Barrel Brush",
      description: "Long-reach brush designed for cleaning wheel barrels and inner areas"
    },
    {
      id: 14,
      name: "Spoke Specific Brush",
      description: "Precision brush for detailed spoke and intricate wheel component cleaning"
    },
    {
      id: 15,
      name: "Wash Mitts",
      description: "Premium wash mitts for safe and effective paint cleaning"
    }
  ];

  return (
    <div className="equipment-page">
      <div className="container">
        <h1>Professional Equipment</h1>
        <p className="page-intro">
          We use only the best professional-grade equipment and products to ensure superior results for your vehicle.
          <br />
          <em>Using high quality top of the line chemicals</em>
        </p>
        
        {/* Interior Equipment */}
        <section className="equipment-category-section">
          <br />
          <h2>🧼 Interior Equipment</h2>
          <div className="equipment-grid">
            {interiorEquipment.map(item => (
              <div key={item.id} className="equipment-card">
                <div className="equipment-image">
                  <span>Equipment Image</span>
                </div>
                <div className="equipment-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exterior Equipment */}
        <section className="equipment-category-section indented">
          <br />
          <h2>🚗 Exterior Equipment</h2>
          <div className="equipment-grid">
            {exteriorEquipment.map(item => (
              <div key={item.id} className="equipment-card">
                <div className="equipment-image">
                  <span>Equipment Image</span>
                </div>
                <div className="equipment-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default EquipmentPage;