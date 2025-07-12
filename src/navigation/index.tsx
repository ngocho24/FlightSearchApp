import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import FlightsScreen from '../screens/FlightsScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import FlightDetailScreen from '../screens/FlightDetailScreen';
import BookingScreen from '../screens/BookingScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import { Flight } from '../types/flights';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Flights: undefined;
  Profile: undefined;
  FlightDetail: { flight: Flight };
  Booking: { flight: Flight };
  ResetPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const { currentUser, loading } = useAuth();

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#2089dc' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } }}>
        {currentUser ? (
          <>
            <Stack.Screen name="Flights" component={FlightsScreen} options={{ title: 'Flight Search' }} />
            {/* <Stack.Screen name="FlightDetail" component={FlightDetailScreen} options={{ title: 'Flight Details' }} /> */}
            <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Book Flight' }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ title: 'Reset Password' }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Create Account' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
