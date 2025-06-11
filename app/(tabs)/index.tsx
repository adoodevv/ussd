import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const USSDApp = () => {
  const handleOpenDialer = async () => {
    try {
      const ussdCode = '*124#';
      const url = `tel:${encodeURIComponent(ussdCode)}`;
      const canOpen = await Linking.canOpenURL(url);

      if (canOpen) {
        await Linking.openURL(url);
      }
    } catch (err) {
      console.error('Error opening dialer:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>USSD Dialer</Text>
      <Text style={styles.description}>Press the button to open dialer with USSD code</Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenDialer}>
        <Text style={styles.buttonText}>Open Dialer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#0047AB',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default USSDApp;