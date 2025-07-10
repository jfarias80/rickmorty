import { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { ScrollView } from "react-native";
import { getPersonajes } from "../lib/rickMorty";
import { ActivityIndicator, FlatList } from "react-native-web";

export function Main() {
    const [personajes, setPersonajes] = useState([]);        
    useEffect(
        () => {
            getPersonajes().then((data) => {
            setPersonajes(data);
            console.log("personajes", data)
            })
        }, []
    )

    return  (
        <>
        {personajes.length === 0 ? (
            <ActivityIndicator size={"large"}/>
        ):( 
            <FlatList
                data={personajes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={(item, index) => (<CharacterCard index={index} character={item}/>)}>
            </FlatList>            
        )}
        </>
    );
}