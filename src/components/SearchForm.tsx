import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

interface SearchParams {
  from: string;
  to: string;
  date: string;
}

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert('Please fill in all fields');
      return;
    }
    onSearch({ from, to, date });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="From"
        value={from}
        onChangeText={setFrom}
        autoCapitalize="words"
        containerStyle={styles.input}
      />
      <Input
        placeholder="To"
        value={to}
        onChangeText={setTo}
        autoCapitalize="words"
        containerStyle={styles.input}
      />
      <Input
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        containerStyle={styles.input}
      />
      <Button title="Search Flights" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    marginBottom: 15,
  },
});