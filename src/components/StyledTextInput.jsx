import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "grey",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    }
})

const StyledTextInput = ({ style, ...props }) => {

    const inputStyle = {
        ...styles,
        ...style
    }

    return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput