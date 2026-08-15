import axios from "axios";

const API_URL = "http://localhost:5000/api/properties";

const MOCK_PROPERTIES = [
  {
    _id: "1",
    id: "1",
    title: "Serene Bayfront Villa",
    location: "Bandra West, Mumbai",
    price: 125000000,
    status: "AI Curated",
    property_type: "For Sale",
    bedrooms: 4,
    bathrooms: 4,
    area_sqft: 3200,
    image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "2",
    id: "2",
    title: "The Glass Residence",
    location: "Worli Sea Face, Mumbai",
    price: 450000,
    status: "Popular",
    property_type: "For Rent",
    bedrooms: 3,
    bathrooms: 3,
    area_sqft: 2400,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "3",
    id: "3",
    title: "Heritage Heights Penthouse",
    location: "Juhu, Mumbai",
    price: 180000000,
    status: "Exclusive",
    property_type: "For Sale",
    bedrooms: 5,
    bathrooms: 5,
    area_sqft: 4500,
    image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  }
];

export const getProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.properties || response.data;
  } catch (error) {
    console.warn("Backend server offline. Serving fallback properties data.");
    return MOCK_PROPERTIES;
  }
};

export const getPropertyById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.property || response.data;
  } catch (error) {
    console.warn("Backend server offline. Serving fallback property detail.");
    return MOCK_PROPERTIES.find((item) => item.id === id || item._id === id) || MOCK_PROPERTIES[0];
  }
};