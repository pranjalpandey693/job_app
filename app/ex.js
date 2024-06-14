import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={styles.container}>
      {showDetails ? (
        <View>
          <Text style={styles.title}>Details Screen</Text>
          <Button title="Go Back" onPress={handleToggleDetails} />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Welcome to My App!</Text>
          <Image
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={styles.image}
          />
          <Button title="Go to Details" onPress={handleToggleDetails} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
