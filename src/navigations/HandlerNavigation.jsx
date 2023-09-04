import React from 'react'
import {View, Text} from "react-native"

export const AppNavigation = () => {
    return(
        <View>
            <Text>AppNavigation</Text>
        </View>
    )
}

export const AuthNavigation = () => {
    return(
        <View>
            <Text>AuthNavigation</Text>
        </View>
    )
}


export const HandlerNavigation = () => {
    const user = null
 
    return user ? <AppNavigation /> : <AuthNavigation />
}
