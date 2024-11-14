import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    // Replace this with your actual registration logic (e.g., API call)
    console.log('Registering with:', { username, password });

    // Navigate back to the login page (index.jsx) upon successful registration
    router.push('/'); // Adjusted to navigate to index.jsx
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE40RUns5KIvAOBag57Nd6Dz2oferHxB_kbg&s' }} // Replace with your image URL
        style={styles.logo}
      />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} color="#4A90E2" />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', // Light gray background
  },
  logo: {
    width: 150, // Adjust size as needed
    height: 150,
    borderRadius: 75, // Circular shape
    marginBottom: 20, // Spacing below the image
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333', // Dark gray text
  },
  input: {
    height: 50,
    borderColor: '#BDC3C7', // Light border color
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#FFFFFF', // White input background
    borderRadius: 5, // Rounded corners for inputs
  },
});

export default Signup;
