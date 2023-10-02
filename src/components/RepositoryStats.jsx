import React from "react";
import { View, Text } from "react-native";
import StyledText from "./StyledText";

const parseThousand = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}k`
        : String(value)
}

const RepositoryStats = (props) => {

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View>
                <StyledText bold>Rating</StyledText>
                <Text>{props.ratingAverage}</Text>
            </View>
            <View>
                <StyledText bold>Reviews</StyledText>
                <Text>{props.reviewCount}</Text>
            </View>
            <View>
                <StyledText bold>Forks</StyledText>
                <Text>{parseThousand(props.forksCount)}</Text>
            </View>
            <View>
                <StyledText bold>Estrellas</StyledText>
                <Text>{parseThousand(props.stargazersCount)}</Text>
            </View>
        </View>
    )
}

export default RepositoryStats