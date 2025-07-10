import axios from 'axios';

// API Configuration (use environment variables in production)
const API_KEY = 'bf1134ef43msh2d13d82a2954c60p112019jsn5e19e7795425'; 
const BASE_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights';

// Flight Search Endpoint
export const searchFlights = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/searchAirport`, {
      params: {
        origin: params.origin,      // e.g., 'JFK'
        destination: params.destination, // e.g., 'LAX'
        date: params.date,          // e.g., '2025-07-20'
        currency: 'USD',           // Default currency
        locale: 'en-US'            // Default language
      },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
      }
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};


export const getFlightDetails = async (flightId) => {
  try {
    const response = await axios.get(`${BASE_URL}/getFlightDetails`, {
      params: {
        flightId: flightId,
        currency: 'USD',
        locale: 'en-US'
      },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Flight Details Error:', error);
    throw error;
  }
};

// Helper function for error handling
const handleApiError = (error) => {
  if (error.response) {
    // Server responded with non-2xx status
    console.error('API Response Error:', {
      status: error.response.status,
      data: error.response.data
    });
  } else if (error.request) {
    // No response received
    console.error('API Request Error:', error.request);
  } else {
    // Other errors
    console.error('API Error:', error.message);
  }
  throw error;
};