import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button 
        title="Go to Signup" 
        onPress={() => navigation.navigate('Signup')} 
      />
    </View>
  );
}