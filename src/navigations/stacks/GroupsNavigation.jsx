import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'

import {GroupsScreen, GreateGroupScreen, CreateGroupScreen} from "../../screens/Groups"
import { styles } from '../Styles.styles'
import { screens } from '../../utils'

const Stack = createStackNavigator();

export const GroupsNavigation = () => {
  return (
  <Stack.Navigator screenOptions={{...styles.stackNavigationStyles}}>
    <Stack.Screen name={screens.tab.groups.groupsScreen}
      component={GroupsScreen} 
      options={{ title: "Grupos"}}
    />
    <Stack.Screen name={screens.tab.groups.createGroupScreen}
      component={CreateGroupScreen} 
      options={{
         title: "Novo Grupo",
         presentation: "modal",
         ...styles.modalStyles,
        }}
    />
  </Stack.Navigator>
  )
}
