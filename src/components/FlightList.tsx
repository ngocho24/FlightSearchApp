import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { Flight } from '../types/flights';

export default function FlightList({ flights, onSelectFlight }: { flights: Flight[]; onSelectFlight: (flight: Flight) => void }) {
  return (
    <FlatList
      data={flights}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelectFlight(item)}>
          <ListItem bottomDivider>
            <Avatar source={{ uri: item.airline.logo || 'https://placeholder.com/logo.png' }} />
            <ListItem.Content>
              <ListItem.Title>{`${item.airline.name} – ${item.departure.airport} → ${item.arrival.airport}`}</ListItem.Title>
              <ListItem.Subtitle>{`Price: $${item.price}`}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      )}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({ list: { marginTop: 10 } });
