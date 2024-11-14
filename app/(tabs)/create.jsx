import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Create = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (movieTitle && feedback) {
      // Here you would typically send the feedback to your server or API
      Alert.alert('Feedback Submitted', `Feedback for "${movieTitle}" has been submitted!`);
      // Reset the fields
      setMovieTitle('');
      setFeedback('');
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Movie Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Movie Title"
        value={movieTitle}
        onChangeText={setMovieTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <Button title="Submit Feedback" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D3D3D3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default Create;
