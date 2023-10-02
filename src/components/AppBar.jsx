import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";
import Constans from "expo-constants"
import { Link, useLocation } from "react-router-native";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.appBar,
        paddingTop: Constans.statusBarHeight + 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        flexDirection: "row"
    },
    text: {
        color: theme.colors.textPrimary
    },
    active: {
        backgroundColor: "white"
    }
})

const AppBarTab = ({ children, to }) => {

    const { pathname } = useLocation()

    const textStyles = [
        styles.text,
        pathname == to && styles.active
    ]


    return (
        <Link to={to}>
            <StyledText style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab to={"/"}>Repositorios</AppBarTab>
                <AppBarTab to={"/signin"}>Signin</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar