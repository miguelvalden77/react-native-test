import React from "react";
import { FlatList, Text, View } from "react-native";
import repositorios from "../data/repositorios";
import Repository from "./Repository";

const RepositoryList = () => {

    return (
        <FlatList
            data={repositorios}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => {
                return (<Repository {...repo} />)
            }}
        />
    )
}

export default RepositoryList