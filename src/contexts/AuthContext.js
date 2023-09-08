import React, { useState, useEffect, createContext } from "react";
import { User, Auth } from "../api";
import { hasExpiredToken } from "../utils";

export const AuthContext = createContext();

const userController = new User();
const authController = new Auth();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const accessToken = await authController.getAccessToken();
      const refreshToken = await authController.getRefreshToken();

      if (!accessToken || !refreshToken) {
        logout();
        setLoading(false);
        return;
      }

      if (hasExpiredToken(accessToken)) {
        if (hasExpiredToken(refreshToken)) {
          logout();
        } else {
          reLogin(refreshToken);
        }
      } else {
        await login(accessToken);
      }
    })();
  }, []);

  const reLogin = async (refreshToken) => {
    console.log("relogin");
  };

  const login = async (accessToken) => {
    try {
      setLoading(true);
      const response = await userController.getMe(accessToken);
      console.log(response);
      setUser(response);
      setToken(accessToken);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const logout = async () => {
    console.log("###############");
    console.log("LOGOUT");
  };

  const updateUser = (key, value) => {};

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
