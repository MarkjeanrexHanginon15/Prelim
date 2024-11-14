import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const movies = [
  {
    id: '1',
    title: 'Deadpool',
    image: 'https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg',
  },
  {
    id: '2',
    title: 'Venom',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPui8O1WoczWD8C5frNPo8K4huE9wu-IQ_Ew&s0',
  },
  {
    id: '3',
    title: 'Talk To Me',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeglkO_n8r_Nz3FOdjDcGGFWy9iqV-BEEVeg&s',
  },
  {
    id: '4',
    title: 'Fall Guy',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-4tl-GpcvtgE-Zo5tPkQmU5_KZWhSj48tQ&s',
  },
];

const Home = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.movieCard}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Movies</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D3D3D3', // Change to your desired background color
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  movieCard: {
    marginRight: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  image: {
    width: 120,
    height: 180,
  },
  movieTitle: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
  },
});

export default Home;
