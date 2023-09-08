import { View, Text } from "react-native"

import { useNavigation } from "@react-navigation/native"
import {styles} from "./LoginScreen.Styles"
import {screens} from "./../../../utils"
import { LoginForm } from "../../../components/Auth/LoginForm"

export const LoginScreen = () => {
  
  const navigation = useNavigation();
 
  const goToRegister = () =>{
    navigation.navigate(screens.auth.registerScreen);
  }  
  return (
    <View style={styles.content}>
        <Text style={styles.title}>Entre para começar</Text>

        <LoginForm />

        <Text style={styles.register} onPress={goToRegister}>Registrar-se</Text>
      
        <Text style={styles.info}>
            Você deve ter 16 anos de idade ou mais para registrar-se. 
            Mais informações sobre como o ChatApp trabalha em suas politicas 
        </Text>
    </View>
  )
}
