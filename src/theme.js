import { Platform } from "react-native"

const theme = {
    colors: {
        textPrimary: "blue",
        textSecondary: "purple",
        appBar: Platform.select({
            ios: "green",
            android: "red",
            default: "blue"
        })
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: "System"
    },
    fontWeight: {
        normal: "400",
        bold: "700"
    }
}

export default theme