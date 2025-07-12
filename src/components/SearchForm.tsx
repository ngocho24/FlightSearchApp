import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

interface SearchFormProps {
  onSearch: () => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  return (
    <View style={styles.container}>
      <Input
        placeholder="From"
        value={from}
        onChangeText={setFrom}
        containerStyle={styles.input}
      />
      <Input
        placeholder="To"
        value={to}
        onChangeText={setTo}
        containerStyle={styles.input}
      />
      <Input
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        containerStyle={styles.input}
      />
      <Button
        title="Search Flights"
        onPress={onSearch}
        buttonStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  input: { marginBottom: 10 },
  button: {
    backgroundColor: '#2089dc',
    borderRadius: 8,
    paddingVertical: 12,
  },
});
