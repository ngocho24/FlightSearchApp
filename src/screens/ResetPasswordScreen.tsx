// src/screens/ResetPasswordScreen.tsx
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useAuth } from '../context/AuthContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { authStyles } from '../styles/authStyles';

type Props = StackScreenProps<RootStackParamList, 'ResetPassword'>;

export default function ResetPasswordScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleReset = async () => {
    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    try {
      setLoading(true);
      await resetPassword(email);
      Alert.alert('Success', 'Password reset email sent. Please check your inbox.', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={authStyles.container}>
      <View style={authStyles.innerContainer}>
        <Input
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          containerStyle={authStyles.input}
        />
        <Button
          title="Send Reset Link"
          onPress={handleReset}
          loading={loading}
          disabled={!email}
          buttonStyle={authStyles.primaryButton}
        />
        <Button
          title="Back to Profile"
          onPress={() => navigation.goBack()}
          type="clear"
          titleStyle={authStyles.secondaryButtonText}
          containerStyle={authStyles.secondaryButton}
        />
      </View>
    </View>
  );
}