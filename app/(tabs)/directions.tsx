import React from 'react';
import { View, Text, StyleSheet, Button, Linking, Alert } from 'react-native';

export default function DirectionsScreen() {
  // Mocked coordinates for demonstration
  const latitude = 37.3692;
  const longitude = -122.0344;

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url).catch(() =>
      Alert.alert('Error', 'Unable to open Google Maps. Please try again.')
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Directions to the person in need:</Text>
      <Text style={styles.text}>Latitude: {latitude}</Text>
      <Text style={styles.text}>Longitude: {longitude}</Text>
      <Button title="Open in Google Maps" onPress={openGoogleMaps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9E3B4', // Updated background color
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
  },
});