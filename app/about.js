import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function About() {

    return(

        <View>
            <Text>TEXTO SOBRE LA SERIE</Text>

            <Link href="/">
                <Text>Volver al Inicio</Text>
            </Link>

        </View>

        

    );
}