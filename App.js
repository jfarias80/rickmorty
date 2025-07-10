import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';
import { Main } from './components/Main';


export default function App() {
      
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Logo style={styles.logo}/>
      <Text style={styles.header}>🌌 Rick & Morty Universe</Text>
      <Main/>
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