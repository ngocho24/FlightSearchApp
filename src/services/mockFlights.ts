// src/services/mockFlights.ts
import { Flight } from '../types/flights';

export async function searchFlights(): Promise<Flight[]> {
  // Simulated API call delay
  await new Promise((res) => setTimeout(res, 500));

  return [
    {
      id: '1',
      price: 450,
      departure: { airport: 'JFK', time: '10:00', date: '2025-07-20' },
      arrival: { airport: 'LAX', time: '13:00', date: '2025-07-20' },
      airline: { name: 'Delta Air Lines', logo: 'https://logo.clearbit.com/delta.com' },
      duration: '6h',
      flightNumber: 'DL123',
      aircraft: 'Boeing 737',
      class: 'Economy',
    },
    {
      id: '2',
      price: 390,
      departure: { airport: 'JFK', time: '12:00', date: '2025-07-20' },
      arrival: { airport: 'LAX', time: '15:00', date: '2025-07-20' },
      airline: { name: 'American Airlines', logo: 'https://logo.clearbit.com/aa.com' },
      duration: '6h',
      flightNumber: 'AA456',
      aircraft: 'Airbus A320',
      class: 'Economy',
    },
  ];
}
