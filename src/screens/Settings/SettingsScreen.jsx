import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button } from "native-base";
import { useAuth } from "../../hooks";
export const SettingsScreen = () => {
  const {logout} = useAuth()
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Button onPress={ logout }>Encerrar sessão</Button> 
    </SafeAreaView>
  );
};
