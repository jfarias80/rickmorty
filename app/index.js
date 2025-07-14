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
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        //justifyContent: 'center',
        //position: 'relative',
    },
    aboutButton: {
        //position: 'absolute',
        top: 20,
        right: 5,
        backgroundColor: '#00ffcc',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    }

});