import { useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { searchFlights } from '../services/api';

export default function HomeScreen() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchFlights({
        origin: 'JFK',
        destination: 'LAX',
        date: '2025-07-20'
      });
      setFlights(results.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Search Flights" onPress={handleSearch} />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        flights.map((flight) => (
          <Text key={flight.id}>{flight.airline} - ${flight.price}</Text>
        ))
      )}
    </View>
  );
}