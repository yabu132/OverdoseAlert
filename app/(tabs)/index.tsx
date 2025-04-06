// app/(tabs)/index.tsx
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'; // Added Alert
import { useRouter } from 'expo-router';
import * as Location from 'expo-location'; // Added Location

export default function HomeScreen() {
  const router = useRouter();

  const handleHelpPress = async () => {
    try {
      // Request location permissions
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to send an alert.');
        return;
      }

      // Get current location
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      console.log("Help button pressed! Coordinates:", latitude, longitude);

      // Send coordinates to Palantir API
      const response = await fetch('https://palantir-api.example.com/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude,
          longitude,
          alertType: 'overdose',
        }),
      });

      if (response.ok) {
        Alert.alert('Alert Sent', 'Nearby providers have been notified.');
      } else {
        Alert.alert('Error', 'Failed to send alert. Please try again.');
      }
    } catch (error) {
      console.error('Error sending alert:', error);
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  const handleProviderPress = () => {
    console.log("Provider button pressed!");
    router.push('/provider-auth');
  };

  return (
      <View style={styles.container}>
        {/* Help Button (remains centered) */}
        <TouchableOpacity
          style={styles.helpButton}
          onPress={handleHelpPress}
          activeOpacity={0.7}
        >
          <Text style={styles.helpButtonText}>help</Text>
        </TouchableOpacity>

        {/* Provider Button (positioned at the bottom) */}
        <TouchableOpacity
          style={styles.providerButton}
          onPress={handleProviderPress}
          activeOpacity={0.8}
        >
          <Text style={styles.providerButtonText}>i'm a provider</Text>
        </TouchableOpacity>
      </View>
    );
}

// Styles should remain here...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100, // Keep or adjust this padding
  },
  helpButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  helpButtonText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  providerButton: {
    position: 'absolute',
    bottom: 40,
    width: '80%',
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  providerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});