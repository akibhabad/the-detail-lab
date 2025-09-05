export const pricing = {
  notes: "Sedan baseline; larger vehicles +$20",
  exterior: [
    {
      name: "Basic Exterior Wash",
      price: 75,
      includes: ["pH-neutral hand wash", "Tires & rims cleaned", "Spot-free rinse"]
    },
    {
      name: "Clay & Hydro Sealant",
      price: 100,
      includes: ["Everything in Basic wash", "Clay treatment", "5-month hydrophobic sealant"]
    }
  ],
  interior: [
    {
      name: "Basic Interior Detail",
      price: 100,
      includes: ["Thorough vacuum", "Wipe down all surfaces", "Windows", "Mats"]
    },
    {
      name: "Deep Interior Clean",
      priceFrom: 135,
      includes: ["Dress vinyl/plastic/rubber", "Second deeper vacuum", "Light stain removal"],
      addons: ["Pet Hair $20–40", "Severe Stain — quote"]
    }
  ],
  packages: [
    {
      name: "Mini Full Detail (Basic In+Out)",
      price: 175,
      bestFor: "Regular maintenance"
    },
    {
      name: "Premium Full Detail (Deep + Clay & Sealant)",
      priceFrom: 235,
      bestFor: "Full rejuvenation"
    }
  ],
  extras: [
    {
      name: "Engine Bay Cleaning",
      price: 50
    },
    {
      name: "Headlight Restoration",
      price: 40,
      unit: "pair"
    },
    {
      name: "Trim Restoration",
      price: 35
    }
  ],
  equipment: {
    interior: [
      "Ridgid air compressor",
      "Shop vac",
      "Extractor",
      "Industrial steamer",
      "Drill brushes",
      "Interior brushes",
      "Premium microfiber"
    ],
    exterior: [
      "1800 psi pressure washer",
      "Foam cannon",
      "Pump sprayer",
      "1200 gsm drying towels",
      "Wheel face/barrel/spoke brushes",
      "High-quality soaps",
      "Wash mitts"
    ]
  }
}

export const contact = {
  phone: "(860) 560‑6294",
  emails: ["efagin19@gmail.com", "akibhabad7@gmail.com"],
  serviceArea: "Greater Hartford Area",
  responseTime: "less than 24 hours"
}

export const images = {
  exterior: [
    {
      src: "/images/7DB3F5C8-2849-406E-A8EF-C1D4E3CE8ADD_1_105_c.jpeg",
      alt: "Exterior car detailing - clean vehicle finish"
    },
    {
      src: "/images/B9B93F84-874E-4C04-A914-C07D966995AA_1_105_c.jpeg",
      alt: "Exterior car detailing - wheel and rim cleaning"
    },
    {
      src: "/images/477222C4-ED61-4658-996B-2673198FE989_1_105_c.jpeg",
      alt: "Exterior car detailing - paint protection"
    }
  ],
  interior: [
    {
      src: "/images/IMG_2708.JPG",
      alt: "Interior car detailing - dashboard and console"
    },
    {
      src: "/images/IMG_2739.JPG",
      alt: "Interior car detailing - seat cleaning"
    },
    {
      src: "/images/IMG_2760.JPG",
      alt: "Interior car detailing - carpet vacuuming"
    },
    {
      src: "/images/IMG_2790.JPG",
      alt: "Interior car detailing - finished interior"
    }
  ],
  owner: {
    src: "/images/A4B5C8D4-1DEB-41D7-A4C0-F8BA79951F44_1_105_c.jpeg",
    alt: "Eli Fagin - Detail Lab Owner"
  },
  logos: {
    main: "/images/logo.png",
    black: "/images/lblackogo.png"
  }
}

export const ownerBio = {
  name: "Eli Fagin",
  professionalBio: "Detail Lab is a mobile auto detailing service founded on a commitment to quality and convenience. We bring professional-grade equipment and expertise directly to your location, ensuring your vehicle receives the highest level of care without disrupting your schedule.",
  originalBio: "My name is Eli Fagin, and I'm a 17-year-old recent high school graduate with a growing passion for car detailing. This summer, I've completed over 25 details and invested thousands of my own savings into professional-grade equipment to give each vehicle the highest level of care. I take pride in offering thorough, convenient service—right in your driveway. With several positive reviews and a strong commitment to quality, I'd love the opportunity to earn your trust and business. If you're looking for a detail done right while supporting a local teen-run business, please feel free to contact me"
}