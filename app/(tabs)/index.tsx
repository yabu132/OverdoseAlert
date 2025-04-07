import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handleHelpPress = () => {
    // Directly navigate to the help page
    router.push('/help');
  };

  const handleProviderPress = () => {
    console.log("Provider button pressed!");
    router.push('/provider-auth');
  };

  return (
    <View style={styles.container}>
      {/* Help Button */}
      <TouchableOpacity
        style={styles.helpButton}
        onPress={handleHelpPress}
        activeOpacity={0.7}
      >
        <Text style={styles.helpButtonText}>help</Text>
      </TouchableOpacity>

      {/* Provider Button */}
      <TouchableOpacity
        style={styles.providerButton}
        onPress={handleProviderPress}
        activeOpacity={0.8}
      >
        <Text style={styles.providerButtonText}>I'm a provider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E3B4', // Updated background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  helpButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor:  "#E0262D",
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
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
    bottom: 60,
    width: '80%',
    backgroundColor: '#3E6990',
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