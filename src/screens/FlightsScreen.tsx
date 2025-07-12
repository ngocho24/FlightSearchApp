// src/screens/FlightsScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SearchForm from '../components/SearchForm';
import FlightList from '../components/FlightList';
import { searchFlights } from '../services/mockFlights';
import { Flight } from '../types/flights';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

type Props = StackScreenProps<RootStackParamList, 'Flights'>;

export default function FlightsScreen({ navigation }: Props) {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const results = await searchFlights();
      setFlights(results);
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Find your next flight ✈️</Text>
      <SearchForm onSearch={handleSearch} />
      {loading && <Text style={styles.status}>Loading flights...</Text>}
      {error ? (
        <Text style={[styles.status, styles.error]}>{error}</Text>
      ) : (
        <FlightList flights={flights} onSelectFlight={handleSelectFlight} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb', padding: 10 },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
    color: '#2089dc',
  },
  status: { textAlign: 'center', marginTop: 10, color: '#333' },
  error: { color: 'red' },
});
