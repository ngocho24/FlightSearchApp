import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, Divider } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

type Props = StackScreenProps<RootStackParamList, 'FlightDetail'>;

export default function FlightDetailScreen({ route, navigation }: Props) {
  const { flight } = route.params;

  const handleBookFlight = () => {
    navigation.navigate('Profile'); 
    // Or: navigation.navigate('Booking', { flight })
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: flight.airline.logo }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>{flight.airline.name} - {flight.flightNumber}</Text>
        <Divider style={{ marginVertical: 10 }} />
        
        <Text style={styles.route}>{flight.departure.airport} → {flight.arrival.airport}</Text>
        <Text style={styles.detail}>Departure: {flight.departure.date} at {flight.departure.time}</Text>
        <Text style={styles.detail}>Arrival: {flight.arrival.date} at {flight.arrival.time}</Text>
        <Text style={styles.detail}>Duration: {flight.duration}</Text>
        <Text style={styles.detail}>Aircraft: {flight.aircraft}</Text>
        <Text style={styles.detail}>Class: {flight.class}</Text>
        <Text style={styles.price}>${flight.price}</Text>
        
        <Button
          title="Book Flight"
          buttonStyle={styles.button}
          onPress={handleBookFlight}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 20, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  logo: { width: 100, height: 40, alignSelf: 'center', marginBottom: 10 },
  title: { fontSize: 18, textAlign: 'center', marginBottom: 10, fontWeight: 'bold' },
  route: { textAlign: 'center', fontSize: 16, marginBottom: 5 },
  detail: { textAlign: 'center', color: '#555', marginBottom: 3 },
  price: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#2089dc', marginVertical: 10 },
  button: { backgroundColor: '#2089dc', borderRadius: 8, marginTop: 10 }
});
