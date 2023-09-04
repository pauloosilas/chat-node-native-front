import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { AuthStartScreen, LoginScreen, RegisterScreen} from "../../screens/Auth"
import { screens } from "../../utils"

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name={screens.auth.authStartScreen}
            component={AuthStartScreen} 
            options={{ headerShown: false }} 
        />
         <Stack.Screen 
            name={screens.auth.loginScreen}
            component={LoginScreen} 
            options={{title: "Iniciar Sessão" }} 
        />
         <Stack.Screen 
            name={screens.auth.registerScreen}
            component={RegisterScreen} 
            options={{title: "Cadastro" }} 
        />
    </Stack.Navigator>
  )
}
