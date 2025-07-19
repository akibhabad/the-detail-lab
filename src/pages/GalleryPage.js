function GalleryPage() {
  const galleryItems = [
    { id: 1, title: "Sedan - Before & After", category: "exterior" },
    { id: 2, title: "SUV Interior Cleaning", category: "interior" },
    { id: 3, title: "Sports Car Paint Correction", category: "paint" },
    { id: 4, title: "Truck Exterior Detail", category: "exterior" },
    { id: 5, title: "Luxury Car Interior", category: "interior" },
    { id: 6, title: "Headlight Restoration", category: "restoration" },
    { id: 7, title: "Engine Bay Cleaning", category: "engine" },
    { id: 8, title: "Ceramic Coating Results", category: "coating" },
    { id: 9, title: "Wheel & Tire Detail", category: "wheels" }
  ];

  return (
    <div className="gallery-page">
      <div className="container">
        <h1>Our Work</h1>
        <p className="page-intro">See the quality of our work through these before and after shots of our car detailing services.</p>
        
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <div className="image-placeholder">
                <span>Image Placeholder</span>
              </div>
              <div className="gallery-item-info">
                <h3>{item.title}</h3>
                <span className="category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;