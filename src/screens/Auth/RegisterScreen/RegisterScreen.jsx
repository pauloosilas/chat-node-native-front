import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { RegisterForm } from '../../../components/Auth/RegisterForm/RegisterForm'
import {styles} from './RegisterScreen.styles'

export const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Crie uma conta para começar a enviar mensagens
      </Text>

      <RegisterForm />
      

      <Text styles={styles.register} onPress={navigation.goBack}>Iniciar Sessão</Text>
    </View>
  )
}
