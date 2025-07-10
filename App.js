import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getPersonajes } from './lib/rickMorty';
import Logo from './components/Logo';
import { CharacterCard } from './components/CharacterCard';


export default function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(
    () => {
      getPersonajes().then((data) => {
        setPersonajes(data);
        console.log("personajes", data)
      })
    }, []
  )
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Logo style={styles.logo}/>
      <Text style={styles.header}>🌌 Rick & Morty Universe</Text>
      <ScrollView>
        {personajes.map((character) => (
            <CharacterCard key={character.id} character={character}></CharacterCard>
        ))}
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  header: {
    color: '#00ffcc',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },  
  logo: {
    backgroundColor: '#333',
    padding: 3,
  }
});