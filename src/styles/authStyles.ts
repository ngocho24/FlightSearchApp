// src/styles/authStyles.ts
import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  input: {
    marginVertical: 8,
  },
  primaryButton: {
    backgroundColor: '#2089dc',
    marginVertical: 10,
    paddingVertical: 12,
    borderRadius: 8,
  },
  secondaryButton: {
    marginVertical: 5,
  },
  secondaryButtonText: {
    color: '#2089dc',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export const authScreenOptions = {
  headerStyle: {
    backgroundColor: '#2089dc',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};