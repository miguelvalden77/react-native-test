import { Button, Text, TextInput, View } from "react-native"
import { Formik, useField } from "formik";
import StyledTextInput from "./StyledTextInput";
import StyledText from "./StyledText";

const initialValues = {
    email: "",
    password: ""
}

const validateEmail = (value) => {

    const errors = {}

    if (!value.email) {
        errors.email = "Email is required"
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.email)) {
        errors.email = "Email is not valid"
    }

    return errors
}

// Me quedo por aquí
const FormikInputValue = ({ name, ...props }) => {

    const [field, meta, helpers] = useField(name)

    return (
        <>
            <StyledTextInput {...props} value={field.value} onChangeText={value => helpers.setValue(value)} />
            {meta.error && <StyledText style={{ color: "red" }}>{meta.error}</StyledText>}
        </>
    )
}

const Login = () => {

    return (
        <Formik validate={validateEmail} initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return (
                    <View>
                        <FormikInputValue name={"email"} placeholder="email" />
                        <FormikInputValue name={"password"} placeholder="password" secureTextEntry />
                        <Button onPress={handleSubmit} title="Login" />
                    </View>
                )
            }}
        </Formik>
    )
}

export default Login