import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HelpScreen() {
  // Mocked coordinates for demonstration
  const latitude = 37.3692;
  const longitude = -122.0344;

  // State to control blinking
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    // Set up an interval to toggle the text visibility
    const interval = setInterval(() => {
      setIsTextVisible((prev) => !prev);
    }, 500); // Blink every 500ms

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {isTextVisible && <Text style={styles.text}>Help is on the way!</Text>}
      <Text style={styles.text}>Latitude: {latitude}</Text>
      <Text style={styles.text}>Longitude: {longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AABD8C', // Updated background color
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});