import { View } from "react-native";
import { Input, Button } from "native-base"

import { styles } from "./ChangeFirstNameScreen.styles"
export const ChangeFirstNameScreen = () => {
  return (
    <View style={styles.content}>
      <Input
       placeholder="Nome" 
       style={[styles.input]} 
       variant="unstyled"
       autoFocus
       />
      <Button style={styles.btn}> Alterar </Button>
    </View>
  );
};
