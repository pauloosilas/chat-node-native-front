import React from 'react'
import {View, Text} from "react-native"
import { AuthNavigation } from './stacks'
import {AppNavigation} from "./AppNavigation"


export const HandlerNavigation = () => {
    const user = null
 
    return user ? <AppNavigation /> : <AuthNavigation />
}
