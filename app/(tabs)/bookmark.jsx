import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const bookedTickets = [
  {
    id: '1',
    title: 'Deadpool',
    date: '2024-10-10',
    time: '7:00 PM',
  },
  {
    id: '2',
    title: 'Venom',
    date: '2024-10-12',
    time: '5:30 PM',
  },
  {
    id: '3',
    title: 'Talk To Me',
    date: '2024-10-15',
    time: '9:00 PM',
  },
  {
    id: '4',
    title: 'Fall Guy',
    date: '2024-10-20',
    time: '6:15 PM',
  },
];

const Bookmark = () => {
  const renderItem = ({ item }) => (
    <View style={styles.ticketCard}>
      <Text style={styles.movieTitle}>{item.title}</Text>
      <Text style={styles.ticketDetails}>Date: {item.date}</Text>
      <Text style={styles.ticketDetails}>Time: {item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booked Tickets</Text>
      <FlatList
        data={bookedTickets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D3D3D3', // Light gray background
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333', // Dark gray text
  },
  ticketCard: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  ticketDetails: {
    fontSize: 14,
    color: '#666666',
  },
});

export default Bookmark;
