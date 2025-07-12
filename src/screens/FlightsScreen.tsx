// src/screens/FlightsScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchForm from '../components/SearchForm';
import FlightList from '../components/FlightList';
// import { searchFlights } from '../services/api';
import { Flight } from '../types/flights';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

type Props = StackScreenProps<RootStackParamList, 'Flights'>;

export default function FlightsScreen({ navigation }: Props) {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (params: { from: string; to: string; date: string }) => {
    setLoading(true);
    setError('');
    try {
      // const results = await searchFlights(params);
      // setFlights(results);
    } catch (e) {
      setError('Failed to fetch flights. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectFlight = (flight: Flight) => {
    navigation.navigate('FlightDetail', { flight });
  };

  return (
    <View style={styles.container}>
      <SearchForm onSearch={handleSearch} />
      {loading && <Text style={styles.status}>Loading flights...</Text>}
      {error ? (
        <Text style={[styles.status, styles.error]}>{error}</Text>
      ) : (
        <FlightList flights={flights} onSelectFlight={handleSelectFlight} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  status: { textAlign: 'center', marginTop: 10 },
  error: { color: 'red' },
});
