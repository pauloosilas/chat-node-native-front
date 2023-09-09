import React from "react";
import { SafeAreaView } from "react-native";
import { useAuth } from "../../hooks";
import {UserInfo, Options} from "../../components/settings"

export const SettingsScreen = () => {
  const {user, accessToken, logout, updateUser} = useAuth()

  return (
    <SafeAreaView>
      <UserInfo user={user} />
      <Options accessToken={accessToken} logout={logout} updateUser={updateUser}/>
    </SafeAreaView>
  );
};
