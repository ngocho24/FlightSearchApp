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
          <ListItem containerStyle={styles.item} bottomDivider>
            <Avatar source={{ uri: item.airline.logo }} />
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.airline.name}</ListItem.Title>
              <ListItem.Subtitle>{`${item.departure.airport} → ${item.arrival.airport}`}</ListItem.Subtitle>
              <ListItem.Subtitle style={styles.price}>${item.price}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      )}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { marginTop: 10 },
  item: { borderRadius: 8, marginVertical: 5, backgroundColor: '#fff' },
  title: { fontWeight: '600' },
  price: { color: '#2089dc', marginTop: 4 },
});
