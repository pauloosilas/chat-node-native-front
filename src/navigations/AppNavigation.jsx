import { createStackNavigator } from "@react-navigation/stack"
import {ButtonTabNavigation} from "./ButtonTabNavigation"
import {UserProfileScreen, CameraScreen, ImageFullScreen} from "../screens/Global"
import {ChatScreen} from "../screens/Chats"
import {GroupScreen,GroupProfileScreen,AddUserGroupScreen,ChangeNameGroupScreen} from "../screens/Groups"
import {screens, initSockets} from "../utils"

import { styles }from "./Styles.styles"

initSockets();

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={screens.tab.root} 
        component={ButtonTabNavigation}
        options={{headerShown: false}}
        />

  
    <Stack.Screen
        name={screens.global.groupScreen}
        component={GroupScreen}
        options={{headerShown: false, ...styles.stackNavigationStyles}}
      />

      <Stack.Group screenOptions={{presentation: "modal", ...styles.modalStyles}}>
        <Stack.Screen
          name={screens.global.userProfileScreen}
          component={UserProfileScreen}
          options={{title: "info. do usuário"}}
        />

      <Stack.Screen
          name={screens.global.groupProfileScreen}
          component={GroupProfileScreen}
          options={{title: "info. do grupo"}}
        />
       <Stack.Screen
          name={screens.global.addUserGroupScreen}
          component={AddUserGroupScreen}
          options={{title: "Adicionar Participante"}}
        /> 

      <Stack.Screen
          name={screens.global.changeNameGroupScreen}
          component={ChangeNameGroupScreen}
          options={{title: "Trocar nome do grupo"}}
        /> 
      <Stack.Screen
          name={screens.global.cameraScreen}
          component={CameraScreen}
          options={{headerShown: false}}
        /> 

      <Stack.Screen
          name={screens.global.imageFullScreen}
          component={ImageFullScreen}
          options={{headerShown: false}}
        /> 
  
      </Stack.Group>
    </Stack.Navigator>
  )
}
