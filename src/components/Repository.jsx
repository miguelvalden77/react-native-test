import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingLeft: 10,
        paddingRight: 5
    },
    strong: {
        marginBottom: 5,
        fontWeight: 800,
        color: '#09f'
    },
    img: {
        width: 48,
        height: 48,
        borderRadius: 5
    }
})


const Repository = (props) => {

    return (
        <View key={props.id} style={styles.container}>
            <Image style={styles.img} source={{ uri: props.ownerAvatarUrl }} />
            <StyledText bold big blue>Id: {props.id}</StyledText>
            <Text>Nombre: {props.fullName}</Text>
            <Text>Descripcion: {props.description}</Text>
            <Text>Lenguaje: {props.language}</Text>
            <RepositoryStats {...props} />
        </View>
    )
}

export default Repository