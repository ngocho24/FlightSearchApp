// src/screens/SignupScreen.tsx
import React, { useState } from 'react';
import { View, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useAuth } from '../context/AuthContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { authStyles } from '../styles/authStyles';

type Props = StackScreenProps<RootStackParamList, 'Signup'>;

export default function SignupScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const validateForm = () => {
    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password should be at least 6 characters');
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;
    
    try {
      setLoading(true);
      await signUp(email, password);
      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => navigation.replace('Flights') }
      ]);
    } catch (error: any) {
      let errorMessage = 'Signup failed. Please try again.';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Email already in use. Try logging in instead.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password should be at least 6 characters';
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
        <Input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          containerStyle={authStyles.input}
          onSubmitEditing={handleSignup}
        />
        <Button
          title="Create Account"
          onPress={handleSignup}
          loading={loading}
          disabled={!email || !password || !confirmPassword}
          buttonStyle={authStyles.primaryButton}
        />
        <Button
          title="Already have an account? Login"
          onPress={() => navigation.navigate('Login')}
          type="clear"
          titleStyle={authStyles.secondaryButtonText}
          containerStyle={authStyles.secondaryButton}
        />
      </View>
    </KeyboardAvoidingView>
  );
}