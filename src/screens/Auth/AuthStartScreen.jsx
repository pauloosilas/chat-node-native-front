import { View, Text, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { screens } from '../../utils'
import { useAuth } from "../../hooks"

import { assets } from '../../assets'
import { styles } from './AuthStartScreen/index'

export const AuthStartScreen = () => {
  const navigation = useNavigation()
  const goToLogin = () =>{
    navigation.navigate(screens.auth.loginScreen)
  }
  return (
    <SafeAreaView style={styles.content}>
      <Image source={assets.image.jpg.auth01} style={styles.img} />

      <View>
        <Text style={styles.title}>Bem vindo ao chatapp</Text>
        <Text style={styles.description}>Recomendamos usar este serviço com responsabilidade para disfrutar da experiencia que proporciona este app</Text>
        <Text style={styles.description}>Consulte nossas politicas de privacidade. "Aceite e continue" para aceitar as condições do serviço...</Text>

        <Text onPress={goToLogin} style={styles.btn}>
          Aceitar e continuar
        </Text>
      </View>
    </SafeAreaView>
  )
}
