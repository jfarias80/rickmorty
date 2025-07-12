import { StyleSheet, Image, Text, View } from "react-native";

export function CharacterCard({character}) {
    return (
        <View style={styles.card} key={character.id}>
            <Image style={styles.image} source={{ uri: character.image }} />
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.info}>{character.species} | {character.status}</Text>
            <Text style={styles.info}>Gender: {character.gender}</Text>
        </View>
    );
}

const styles = StyleSheet.create({  
  card: {
    backgroundColor: '#2e2e2e',
    borderRadius: 12,
    padding: 20,    
    margin: 20,
    alignItems: 'center',
    width: 500,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#00ffcc',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: '#aaa',
  },  
});