import { Text, View } from "react-native";

export function EpisodeDetails({ episode }) {

    return (

        <View>
            
            <View>
                <Text>{episode.episode}</Text>
                <Text>#{episode.id}</Text>
            </View>

            <Text>{episode.name}</Text>

            <View>
                <View>
                    <Text>Fecha de Emisión</Text>
                    <Text>{episode.air_date}</Text>
                </View>
            </View>

            <View>
                <Text>Primer episodio del personaje</Text>
            </View>

        </View>

    );
}