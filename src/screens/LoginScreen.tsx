// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useAuth } from '../context/AuthContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { authStyles } from '../styles/authStyles';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { logIn } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await logIn(email, password);
    } catch (error: any) {
      let errorMessage = 'Login failed. Please try again.';
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format';
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        errorMessage = 'Invalid email or password';
      }
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={authStyles.container}
    >
      <View style={authStyles.innerContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          containerStyle={authStyles.input}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          containerStyle={authStyles.input}
        />
        <Button
          title="Login"
          onPress={handleLogin}
          loading={loading}
          disabled={!email || !password}
          buttonStyle={authStyles.primaryButton}
        />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => navigation.navigate('Signup')}
          type="clear"
          titleStyle={authStyles.secondaryButtonText}
          containerStyle={authStyles.secondaryButton}
        />
      </View>
    </KeyboardAvoidingView>
  );
}