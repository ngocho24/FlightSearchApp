// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Avatar, Text, Button } from 'react-native-elements';
import { useAuth } from '../context/AuthContext';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { authStyles } from '../styles/authStyles';

type Props = StackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  const { currentUser, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Logout Error', 'Failed to logout. Please try again.');
    }
  };

  const getInitials = (name?: string | null) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Avatar
          size="xlarge"
          rounded
          title={getInitials(currentUser?.email)}
          containerStyle={styles.avatar}
          source={currentUser?.photoURL ? { uri: currentUser.photoURL } : undefined}
        />
        <Text h4 style={styles.userEmail}>
          {currentUser?.email}
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <Button
          title="Edit Profile"
          buttonStyle={[authStyles.primaryButton, styles.button]}
          onPress={() => Alert.alert('Coming Soon', 'Profile editing will be available in the next update')}
        />
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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  avatar: {
    backgroundColor: '#2089dc',
    marginBottom: 15,
  },
  userEmail: {
    textAlign: 'center',
    color: '#333',
  },
  actionsContainer: {
    marginTop: 20,
  },
  button: {
    marginVertical: 10,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
  },
  logoutButtonText: {
    color: 'white',
  },
});