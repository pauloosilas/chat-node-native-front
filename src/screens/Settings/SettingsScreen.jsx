import React from "react";
import { SafeAreaView } from "react-native";
import { useAuth } from "../../hooks";
import {UserInfo} from "../../components/settings"

export const SettingsScreen = () => {
  const {user} = useAuth()

  return (
    <SafeAreaView>
      <UserInfo user={user} />
    </SafeAreaView>
  );
};
