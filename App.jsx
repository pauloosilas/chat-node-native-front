import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { NativeBaseProvider, Button } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { HandlerNavigation } from "./src/navigations/";
import {AuthProvider} from "./src/contexts"

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthProvider>
          <HandlerNavigation />
        </AuthProvider>        
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
