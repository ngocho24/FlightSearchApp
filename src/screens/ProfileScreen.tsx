// src/screens/ProfileScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Avatar, Text, Button, Divider } from 'react-native-elements';
import { useAuth } from '../context/AuthContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { Flight } from '../types/flights';
import { authStyles } from '../styles/authStyles';

type Props = StackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  const { currentUser, logOut } = useAuth();

  // Mock last booking
  const [lastBooking] = useState<Flight | null>({
    id: '1',
    price: 450,
    departure: { airport: 'JFK', time: '10:00', date: '2025-07-20' },
    arrival: { airport: 'LAX', time: '13:00', date: '2025-07-20' },
    airline: { name: 'Delta Air Lines', logo: 'https://logo.clearbit.com/delta.com' },
    duration: '6h',
    flightNumber: 'DL123',
    aircraft: 'Boeing 737',
    class: 'Economy',
  });

  const handleLogout = async () => {
    try {
      await logOut();
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Logout Error', 'Failed to logout. Please try again.');
    }
  };

  const getInitials = (email?: string | null) => {
    if (!email) return '?';
    return email.slice(0, 2).toUpperCase();
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Avatar
          size="xlarge"
          rounded
          title={getInitials(currentUser?.email)}
          containerStyle={styles.avatar}
        />
        <Text h4 style={styles.userEmail}>{currentUser?.email}</Text>
      </View>

      {lastBooking && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>My Last Booking</Text>
          <Divider style={styles.divider} />
          <Text style={styles.flightText}>{lastBooking.airline.name} – {lastBooking.flightNumber}</Text>
          <Text style={styles.flightText}>{lastBooking.departure.airport} → {lastBooking.arrival.airport}</Text>
          <Text style={styles.price}>${lastBooking.price}</Text>
        </View>
      )}

      <View style={styles.actionsContainer}>
        <Button
          title="Change Password"
          buttonStyle={[authStyles.primaryButton, styles.button]}
          onPress={() => navigation.navigate('ResetPassword')}
        />
        <Button
          title="Log Out"
          buttonStyle={[styles.logoutButton, styles.button]}
          titleStyle={styles.logoutButtonText}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  profileHeader: { alignItems: 'center', marginBottom: 20 },
  avatar: { backgroundColor: '#2089dc', marginBottom: 10 },
  userEmail: { textAlign: 'center', color: '#333' },
  card: {
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: { textAlign: 'center', fontSize: 16, fontWeight: '600', marginBottom: 5 },
  divider: { marginVertical: 5 },
  flightText: { textAlign: 'center', marginVertical: 2 },
  price: { textAlign: 'center', color: '#2089dc', fontWeight: 'bold', marginTop: 5 },
  actionsContainer: { marginTop: 20 },
  button: { marginVertical: 8 },
  logoutButton: { backgroundColor: '#ff4444' },
  logoutButtonText: { color: 'white' },
});
