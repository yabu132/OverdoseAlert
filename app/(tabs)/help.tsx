// app/help.tsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Stack } from 'expo-router'; // Import Stack to configure header

export default function HelpScreen() {
  return (
    <>
      {/* Configure the header for this screen */}
      <Stack.Screen options={{ title: 'Assistance Requested' }} />
      <View style={styles.container}>
        <Text style={styles.messageText}>help is on the way</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Add some padding
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', // Dark grey color
  },
});