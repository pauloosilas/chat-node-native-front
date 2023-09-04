import React from 'react'
import {View, Text} from "react-native"
import { AuthNavigation } from './stacks'
import {AppNavigation} from "./AppNavigation"


export const HandlerNavigation = () => {
    const user = {msg: "teste"}
 
    return user ? <AppNavigation /> : <AuthNavigation />
}
