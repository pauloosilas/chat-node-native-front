import { View } from 'react-native'
import {Input, Backdrop, Button} from "native-base"
import {useFormik} from "formik"
import { styles } from "./LoginForm.styles"

export const LoginForm = () => {
  return (
    <View>
        <View style={styles.viewInput}>
            <Input 
                placeholder="Email"
                variant="unstyled"
                autoCapitalize={false}
                style={[styles.input]}
            />
            <Input
                placeholder='Senha'
                variant="unstyled"
                secureTextEntry
                style={styles.input}
            />

            <Button style={styles.btn}> Entrar </Button>
        </View>
    </View>
  )
}
