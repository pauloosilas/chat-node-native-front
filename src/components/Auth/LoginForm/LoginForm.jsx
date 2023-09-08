import { View } from 'react-native'
import {Input, Backdrop, Button} from "native-base"
import {useFormik} from "formik"
import { initialValues, validationSchema } from './LoginForm.form'
import { Auth } from '../../../api/auth'
import {useAuth} from '../../../hooks'
import { styles } from "./LoginForm.styles"

export const LoginForm = () => {
 
  const authController = new Auth();
  const { login } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
       try {
         const response =  await authController.login(formValue.email, formValue.password) 
         const { access, refresh } = response
         await login(access)

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
                onChangeText={(text) => formik.setFieldValue("email", text)}
                style={[styles.input, formik.errors.email && styles.inputError]}
            />
            <Input
                placeholder='Senha'
                variant="unstyled"
                secureTextEntry
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                style={[styles.input, formik.errors.password && styles.inputError]}
            />

            <Button 
                 style={styles.btn}
                 onPress={formik.handleSubmit}
                 isLoading={formik.isSubmitting}> Entrar </Button>
        </View>
    </View>
  )
}
