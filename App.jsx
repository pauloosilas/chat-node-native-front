import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { NativeBaseProvider, Button } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { HandlerNavigation } from "./src/navigations/";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        
          <HandlerNavigation />
        
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
