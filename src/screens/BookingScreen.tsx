import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation';
import { Flight } from '@/types/flights';
// import { bookFlight } from '@/services/booking';
import { useAuth } from '@/context/AuthContext';

type Props = StackScreenProps<RootStackParamList, 'Booking'>;

interface BookingRequest {
  flightId: string;
  passengerName: string;
  passengerEmail: string;
  userId?: string;
}

export default function BookingScreen({ route, navigation }: Props) {
  const { flight } = route.params;
  const { currentUser } = useAuth();
  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState(currentUser?.email || '');
  const [loading, setLoading] = useState(false);


  const handleBooking = async () => {
    // Validate inputs
    if (!passengerName.trim() || !passengerEmail.trim()) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    // Validate flight data
    if (!flight?.id) {
      Alert.alert('Error', 'Invalid flight information');
      return;
    }

    try {
      setLoading(true);
      
      const bookingData: BookingRequest = {
        flightId: flight.id,
        passengerName: passengerName.trim(),
        passengerEmail: passengerEmail.trim(),
        userId: currentUser?.uid ?? ''
      };

      // Call booking service
      // await bookFlight(bookingData);
      
      // Success alert with navigation
      Alert.alert(
        'Booking Confirmed',
        `Your flight ${flight.flightNumber} has been booked!`,
        [
          { 
            text: 'OK', 
            // onPress: () => navigation.navigate('Flights', { refresh: true }) 
          }
        ]
      );

    } catch (error) {
      console.error('Booking error:', error);
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Failed to complete booking'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text h4 style={styles.header}>
        {flight.airline.name} - {flight.flightNumber}
      </Text>
      
      <Text style={styles.routeText}>
        {flight.departure.airport} → {flight.arrival.airport}
      </Text>
      
      <Text style={styles.priceText}>${flight.price}</Text>

      <Input
        placeholder="Full Name"
        value={passengerName}
        onChangeText={setPassengerName}
        containerStyle={styles.input}
        autoCapitalize="words"
      />
      
      <Input
        placeholder="Email"
        value={passengerEmail}
        onChangeText={setPassengerEmail}
        containerStyle={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <Button
        title="Confirm Booking"
        loading={loading}
        buttonStyle={styles.button}
        disabled={!passengerName.trim() || !passengerEmail.trim()}
        onPress={handleBooking}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  header: {
    marginBottom: 10,
    textAlign: 'center'
  },
  routeText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 5
  },
  priceText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2089dc',
    marginBottom: 20
  },
  input: {
    marginVertical: 8
  },
  button: {
    backgroundColor: '#2089dc',
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 8
  }
});