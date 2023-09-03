import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { NativeBaseProvider, Button } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <SafeAreaView>
          <Button>Click-me</Button>
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
