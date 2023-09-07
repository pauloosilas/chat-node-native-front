import { View } from "react-native"
import {Input, Button} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { useFormik } from "formik"
import { initialValues, validationSchema } from "./RegisterForm.form"
import { Auth } from "../../../api" 
import { styles } from "./RegisterForm.styles"

const authController = new Auth();

export const RegisterForm = () => {
 
 const navigation = useNavigation()

 const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue) => {
        try {
            await authController.register(formValue.email, formValue.password)
            navigation.goBack();
        } catch (error) {            
            console.log(error)
        }
    }
 })

  return (
   <View>
        <View style={styles.viewInput}>
            <Input
                placeholder="Email"
                variant="unstyled"
                autoCapitalize={false}
                value={formik.values.email}
                onChangeText = {(text) => {formik.setFieldValue("email", text)}}
                style={[styles.input, formik.errors.email && styles.inputError]}
            />
            <Input
                placeholder="Senha"
                variant="unstyled"
                secureTextEntry
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                style={[styles.input, formik.errors.password && styles.inputError]}
                />

            <Button
                 style={styles.btn} 
                 onPress={formik.handleSubmit} 
                 isLoading={formik.isSubmitting}
            > 
            Criar Conta
            </Button>
        </View>

   </View>
  )
}
