import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { 
    SettingsScreen,
    ChangeFirstNameScreen,
    ChangeLastNameScreen,
     } from "../../screens/Settings"

import { screens } from '../../utils'
import { styles } from '../Styles.styles'

const Stack = createStackNavigator()

export const SettingsNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ ...styles.stackNavigationStyles }}>
        <Stack.Screen 
            name={screens.tab.settings.settingScreen}
            component={SettingsScreen}
            options={{ headerShown: false}}
         />
        <Stack.Screen 
            name={screens.tab.settings.changeFirstNameScreen}
            component={ChangeFirstNameScreen}
            options={{
                 title: "Alterar Nome",
                 presentation: "modal"
                }}
         />
          <Stack.Screen 
            name={screens.tab.settings.changeLastNameScreen}
            component={ChangeLastNameScreen}
            options={{
                 title: "Alterar Sobrenome",
                 presentation: "modal"
                }}
         />

               

    </Stack.Navigator>
  )
}
