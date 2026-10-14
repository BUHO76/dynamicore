// App.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MapScreen from './src/screens/MapScreen';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [showMap, setShowMap] = useState(false);

  const addItem = () => {
    const trimmedItem = newItem.trim();
    if (trimmedItem === '') {
      Alert.alert('Error', 'Escribe un elemento');
      return;
    }
    setItems([...items, trimmedItem]);
    setNewItem('');
  };

  if (showMap) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <Button title="Volver" onPress={() => setShowMap(false)} />
          <MapScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Nuevo elemento"
            value={newItem}
            onChangeText={setNewItem}
          />
          <Button title="Agregar" onPress={addItem} />
          <Button title="Ver mapa" onPress={() => setShowMap(true)} />
          <FlatList
            data={items}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
  },
});

export default App;
