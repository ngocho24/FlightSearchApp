export interface Flight {
  id: string;
  price: number;
  departure: {
    airport: string;
    time: string;
    date: string;
  };
  arrival: {
    airport: string;
    time: string;
    date: string;
  };
  airline: {
    name: string;
    logo: string;
  };
  duration: string;
  flightNumber: string;
  aircraft: string;
  class: string;
}

export interface FlightSearchParams {
  origin: string;
  destination: string;
  date: string;
  returnDate?: string;
  adults?: number;
  currency?: string;
}