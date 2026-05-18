export interface Vehicle {
  id: string;
  name: string;
  price: number;
  category: "Cars" | "Bikes" | "SUVs" | "Electric";
  description: string;
  image: string;
  gallery?: string[];
  specs?: { label: string; value: string }[];
}

export interface Part {
  id: string;
  name: string;
  price: number;
  category: "Engine" | "Brakes" | "Tires" | "Batteries" | "Lights";
  image: string;
}

export interface Accessory {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "v1", name: "Apex GT 500", price: 45999, category: "Cars",
    description: "A powerful sports sedan with turbocharged engine and premium interior. Features adaptive suspension, carbon fiber accents, and a 12-speaker surround sound system. The twin-turbo V6 delivers 500hp with seamless power delivery.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&h=600&fit=crop",
    ],
    specs: [
      { label: "Engine", value: "3.0L Twin-Turbo V6" },
      { label: "Horsepower", value: "500 HP" },
      { label: "0-60 mph", value: "3.8 seconds" },
      { label: "Top Speed", value: "185 mph" },
      { label: "Transmission", value: "8-Speed Auto" },
      { label: "Drivetrain", value: "RWD" },
      { label: "Fuel Economy", value: "22/30 MPG" },
      { label: "Seats", value: "4" },
    ],
  },
  {
    id: "v2", name: "Thunderbolt RS", price: 62500, category: "Cars",
    description: "Luxury performance coupe with 0-60 in 3.2 seconds. Hand-stitched Nappa leather interior, heads-up display, and advanced driver assistance suite. A true driver's car with perfect weight distribution.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900&h=600&fit=crop",
    ],
    specs: [
      { label: "Engine", value: "4.0L Twin-Turbo V8" },
      { label: "Horsepower", value: "620 HP" },
      { label: "0-60 mph", value: "3.2 seconds" },
      { label: "Top Speed", value: "205 mph" },
      { label: "Transmission", value: "7-Speed DCT" },
      { label: "Drivetrain", value: "AWD" },
      { label: "Fuel Economy", value: "18/26 MPG" },
      { label: "Seats", value: "2+2" },
    ],
  },
  {
    id: "v3", name: "Phantom X", price: 89000, category: "Cars",
    description: "Ultra-luxury grand tourer with handcrafted leather interior. Features massage seats, panoramic starlight roof, and whisper-quiet cabin. The ultimate expression of automotive luxury.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&h=600&fit=crop",
    ],
    specs: [
      { label: "Engine", value: "6.0L W12" },
      { label: "Horsepower", value: "650 HP" },
      { label: "0-60 mph", value: "3.5 seconds" },
      { label: "Top Speed", value: "210 mph" },
      { label: "Transmission", value: "8-Speed Auto" },
      { label: "Drivetrain", value: "AWD" },
      { label: "Fuel Economy", value: "14/22 MPG" },
      { label: "Seats", value: "4" },
    ],
  },
  {
    id: "v4", name: "Viper 600R", price: 12999, category: "Bikes",
    description: "High-performance sportbike with race-inspired aerodynamics. Full fairing, Brembo brakes, Öhlins suspension, and quick-shifter for lightning-fast gear changes on the track.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=900&h=600&fit=crop",
    ],
    specs: [
      { label: "Engine", value: "599cc Inline-4" },
      { label: "Horsepower", value: "120 HP" },
      { label: "0-60 mph", value: "3.0 seconds" },
      { label: "Top Speed", value: "165 mph" },
      { label: "Weight", value: "410 lbs" },
      { label: "Fuel Capacity", value: "4.5 gal" },
    ],
  },
  {
    id: "v5", name: "Shadow Cruiser", price: 8999, category: "Bikes",
    description: "Classic cruiser motorcycle with timeless design. Low-slung seat, forward controls, and a deep rumbling V-twin engine. Perfect for long highway rides.",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900&h=600&fit=crop",
    ],
    specs: [
      { label: "Engine", value: "750cc V-Twin" },
      { label: "Horsepower", value: "52 HP" },
      { label: "Seat Height", value: "25.8 in" },
      { label: "Weight", value: "507 lbs" },
      { label: "Fuel Capacity", value: "3.6 gal" },
    ],
  },
  {
    id: "v6", name: "Titan Explorer", price: 52000, category: "SUVs",
    description: "Full-size SUV with off-road capability and luxury features. Three-row seating, adaptive air suspension, terrain management system, and towing capacity of 8,500 lbs.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&h=600&fit=crop",
    ],
    specs: [
      { label: "Engine", value: "3.5L Twin-Turbo V6" },
      { label: "Horsepower", value: "400 HP" },
      { label: "Towing", value: "8,500 lbs" },
      { label: "Drivetrain", value: "4WD" },
      { label: "Seats", value: "7" },
      { label: "Cargo", value: "87.8 cu ft" },
    ],
  },
  {
    id: "v7", name: "Trailblazer Pro", price: 48500, category: "SUVs",
    description: "Adventure-ready SUV with all-terrain technology. Locking differentials, skid plates, 10 inches of ground clearance, and a rugged exterior built for the wild.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&h=600&fit=crop",
    ],
    specs: [
      { label: "Engine", value: "2.7L Turbo I4" },
      { label: "Horsepower", value: "310 HP" },
      { label: "Ground Clearance", value: "10 in" },
      { label: "Drivetrain", value: "4WD" },
      { label: "Seats", value: "5" },
      { label: "Approach Angle", value: "33.1°" },
    ],
  },
  {
    id: "v8", name: "Volt EV One", price: 41000, category: "Electric",
    description: "Zero-emission sedan with 350-mile range and autopilot. Ultra-fast charging, over-the-air updates, and a minimalist interior with a 15-inch touchscreen.",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&h=600&fit=crop",
    ],
    specs: [
      { label: "Battery", value: "82 kWh" },
      { label: "Range", value: "350 miles" },
      { label: "0-60 mph", value: "4.2 seconds" },
      { label: "Charging", value: "250 kW DC" },
      { label: "Drivetrain", value: "RWD" },
      { label: "Cargo", value: "28 cu ft" },
    ],
  },
  {
    id: "v9", name: "Spark EV Sport", price: 55000, category: "Electric",
    description: "Electric performance car with dual-motor all-wheel drive. Launch mode, track-tuned suspension, and regenerative braking that maximizes range on every drive.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&h=600&fit=crop",
    ],
    specs: [
      { label: "Battery", value: "100 kWh" },
      { label: "Range", value: "310 miles" },
      { label: "Horsepower", value: "670 HP" },
      { label: "0-60 mph", value: "2.9 seconds" },
      { label: "Drivetrain", value: "Dual Motor AWD" },
      { label: "Top Speed", value: "163 mph" },
    ],
  },
];

export const parts: Part[] = [
  { id: "p1", name: "Turbo Engine Kit V8", price: 2499, category: "Engine", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop" },
  { id: "p2", name: "Performance Air Filter", price: 89, category: "Engine", image: "https://thumbs.dreamstime.com/b/high-performance-engine-air-filter-showcased-automotive-workshop-daytime-setting-features-prominently-424962518.jpg" },
  { id: "p3", name: "Carbon Ceramic Brakes", price: 1299, category: "Brakes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1Hl48oPBw9scXQZhqL1-eRDZFoiCB2YZQw&s" },
  { id: "p4", name: "Sport Brake Pads Set", price: 149, category: "Brakes", image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=600&h=400&fit=crop" },
  { id: "p5", name: "All-Season Tires (Set of 4)", price: 599, category: "Tires", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop" },
  { id: "p6", name: "Performance Run-Flat Tires", price: 899, category: "Tires", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fpHXKs_F6a_zDCkNaCh3sOOj0UaBzdCbSw&s" },
  { id: "p7", name: "AGM Battery 12V", price: 199, category: "Batteries", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop" },
  { id: "p8", name: "LED Headlight Kit", price: 249, category: "Lights", image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop" },
  { id: "p9", name: "Fog Light Assembly", price: 129, category: "Lights", image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop" },
];

export const accessories: Accessory[] = [
  { id: "a1", name: "Premium Leather Seat Covers", price: 199, category: "Seat Covers", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop" },
  { id: "a2", name: "All-Weather Car Mats", price: 79, category: "Car Mats", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop" },
  { id: "a3", name: "Full-Face Racing Helmet", price: 349, category: "Helmets", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&h=400&fit=crop" },
  { id: "a4", name: "Magnetic Phone Mount", price: 29, category: "Mobile Holders", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop" },
  { id: "a5", name: "Luxury Car Perfume", price: 45, category: "Car Perfumes", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop" },
  { id: "a6", name: "Carbon Fiber Steering Wheel Cover", price: 59, category: "Seat Covers", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop" },
  { id: "a7", name: "LED Interior Strip Lights", price: 39, category: "Car Perfumes", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop" },
  { id: "a8", name: "Dash Cam Pro 4K", price: 159, category: "Mobile Holders", image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop" },
];
