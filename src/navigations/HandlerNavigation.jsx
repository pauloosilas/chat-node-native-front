import React from 'react'
import { AuthNavigation } from './stacks'
import {AppNavigation} from "./AppNavigation"
import {useAuth} from "../hooks" 

export const HandlerNavigation = () => {
    const { user } = useAuth()
    
    console.log(user)
    return user ? <AppNavigation /> : <AuthNavigation />
}
