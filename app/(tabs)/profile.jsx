import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  // Example user data
  const user = {
    name: 'Boss Okrams',
    email: 'boss@okrams',
    avatar: 'https://i.pinimg.com/236x/b7/91/52/b79152a9f75782757086d5d13489f6d1.jpg', // Placeholder avatar
    favoriteGenres: ['Action', 'Comedy', 'Sci-Fi'],
    recentMovies: ['Inception', 'The Matrix', 'Avengers: Endgame'],
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Favorite Genres:</Text>
        <Text style={styles.infoText}>{user.favoriteGenres.join(', ')}</Text>

        <Text style={styles.infoLabel}>Recent Movies Watched:</Text>
        <Text style={styles.infoText}>{user.recentMovies.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D3D3D3',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Profile;
