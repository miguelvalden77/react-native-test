import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textPrimary
    },
    bold: {
        fontWeight: theme.fontWeight.bold
    },
    blue: {
        color: theme.colors.textSecondary
    },
    big: {
        fontSize: theme.fontSizes.subheading
    },
    small: {
        fontSize: theme.fontSizes.body
    }
})

const StyledText = ({ bold, blue, big, small, children, ...restProps }) => {

    const textStyles = [
        styles.text,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small
    ]

    return <Text style={textStyles} {...restProps}>{children}</Text>
}

export default StyledText