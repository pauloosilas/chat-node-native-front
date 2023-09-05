import React from 'react'
import { Icon } from "native-base"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {MaterialCommunityIcons} from "react-native-vector-icons"
import { screens } from '../../utils'
import { styles } from './ButtonStylesNavigation.styles'
import { ChatsNavigation } from '../stacks/ChatsNavigation'
import { GroupsNavigation } from '../stacks/GroupsNavigation'
import { SettingsNavigation } from '../stacks/SettingsNavigation'

const Tab = createBottomTabNavigator();

export const ButtonTabNavigation = () => {
  return (
     <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarInactiveTintColor: "#646464",
            tabBarActiveTintColor: "#0891b2",
            tabBarIcon: ({ color, size}) => screenIcon(route, color, size)
        })}
     >
        <Tab.Screen 
            component={ChatsNavigation}
            name={screens.tab.chats.root} 
            options={{title: "Chats"}}
        />

        <Tab.Screen 
            component={GroupsNavigation}
            name={screens.tab.groups.root} 
            options={{title: "Grupos"}}
        />

        <Tab.Screen 
            component={SettingsNavigation}
            name={screens.tab.settings.root} 
            options={{title: "Ajustes"}}
        />
     </Tab.Navigator>
  )
}


function screenIcon(route, color, size){
    let iconName;

    if(route.name == screens.tab.chats.root){
        iconName="chat"
    }
    if(route.name == screens.tab.groups.root){
        iconName="account-group"
    }
    if(route.name == screens.tab.settings.root){
        iconName="cog-outline"
    }
    return(
        <Icon
          as={MaterialCommunityIcons} name={iconName} color={color} size={size} />
        )
}