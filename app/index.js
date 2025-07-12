import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { Main } from "../components/Main";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.logo}>
                <Logo />
                <br></br>
                <Link href="/about" asChild>
                    <TouchableOpacity style={styles.aboutButton}>
                        <Text>Acerca de</Text>
                    </TouchableOpacity>
                </Link>
            </View>
            <br></br>
            <Text style={styles.header}>🌌 Rick & Morty Universe</Text>
            
            <Main />
            
        </View>
       
        
    );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#1e1e1e',
        paddingVertical: 30,
        paddingHorizontal: 10,
        alignItems: 'center',
        flex: 1
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
    },
    aboutButton: {
        backgroundColor: '#ff9900ff',
    }

});