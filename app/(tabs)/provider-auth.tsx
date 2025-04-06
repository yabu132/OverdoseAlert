// app/provider-auth.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView, // Use ScrollView for smaller screens
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Stack } from 'expo-router';
import Checkbox from 'expo-checkbox'; // Import Checkbox

export default function ProviderAuthScreen() {
  const [isSignUpView, setIsSignUpView] = useState(false); // false = Sign In, true = Sign Up

  // Shared State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign Up Specific State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Sign In Specific State
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    console.log('Attempting Sign In:', { email, password, rememberMe });
    // TODO: Implement actual sign-in logic (e.g., API call)
    Alert.alert('Sign In', 'Sign in logic goes here.');
    // On success, navigate away (e.g., back or to provider dashboard)
    // router.replace('/provider-dashboard'); // Example
  };

  const handleSignUp = () => {
    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    console.log('Attempting Sign Up:', { firstName, lastName, email, password });
    // TODO: Implement actual sign-up logic (e.g., API call)
    Alert.alert('Sign Up', 'Sign up logic goes here.');
    // On success, maybe switch to sign-in view or show success message
    // setIsSignUpView(false);
  };

  const toggleView = () => {
    setIsSignUpView(!isSignUpView);
    // Clear fields when switching views for cleaner UX
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setConfirmPassword('');
    setRememberMe(false);
  };

  return (
    <>
      <Stack.Screen options={{ title: isSignUpView ? 'Provider Sign Up' : 'Provider Sign In' }} />
      {/* KeyboardAvoidingView helps prevent keyboard from covering inputs */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>
              {isSignUpView ? 'Create Provider Account' : 'Provider Sign In'}
            </Text>

            {/* Sign Up Fields */}
            {isSignUpView && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={setFirstName}
                  autoCapitalize="words"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={setLastName}
                  autoCapitalize="words"
                />
              </>
            )}

            {/* Common Fields */}
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email" // Helps with autofill
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry // Hides password input
              autoCapitalize="none"
              autoComplete={isSignUpView ? "new-password" : "password"} // Helps with autofill
            />

            {/* Sign Up - Confirm Password */}
            {isSignUpView && (
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
                autoComplete="new-password" // Helps with autofill
              />
            )}

             {/* Sign In - Remember Me */}
            {!isSignUpView && (
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={rememberMe}
                        onValueChange={setRememberMe}
                        color={rememberMe ? '#007AFF' : undefined}
                    />
                    <Text style={styles.checkboxLabel}>Remember Me</Text>
                </View>
            )}


            {/* Submit Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={isSignUpView ? handleSignUp : handleSignIn}
            >
              <Text style={styles.buttonText}>
                {isSignUpView ? 'Sign Up' : 'Sign In'}
              </Text>
            </TouchableOpacity>

            {/* Toggle Link */}
            <TouchableOpacity onPress={toggleView} style={styles.toggleLink}>
              <Text style={styles.toggleLinkText}>
                {isSignUpView
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign Up"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
    backgroundColor: '#fff', // Match background
  },
  scrollContainer: {
    flexGrow: 1, // Ensures content can scroll if needed
    justifyContent: 'center', // Center content vertically
    paddingHorizontal: 20, // Horizontal padding for the form
    paddingVertical: 30,   // Vertical padding
  },
  formContainer: {
    width: '100%',
    alignItems: 'center', // Center items like title and button
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9', // Slightly off-white background
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    width: '100%', // Align with inputs
    justifyContent: 'flex-start', // Align items to the start
    paddingLeft: 5, // Small offset
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10, // Space above button
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  toggleLink: {
    marginTop: 25,
  },
  toggleLinkText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});