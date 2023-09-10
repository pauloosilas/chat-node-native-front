import {  createStackNavigator } from "@react-navigation/stack"
import {ChatScreen, ChatsScreen, CreateChatScreen} from "../../screens/Chats"
import { screens } from "../../utils"
import { styles } from "../Styles.styles"

const Stack = createStackNavigator();

export const ChatsNavigation= () =>{
    return(
        <Stack.Navigator 
            screenOptions={{
                ...styles.stackNavigationStyles,
            }}>

        <Stack.Screen
            name={screens.tab.chats.chatsScreen}
            component={ChatsScreen}
            options={{title: "Chats"}}
        />
         <Stack.Screen
            name={screens.tab.chats.createChatScreen}
            component={ChatScreen}
            options={{
                title: "Novo Chat",
                presentation: "modal",
                ...styles.modalStyles,
            }}
        />
        </Stack.Navigator>
    )
}