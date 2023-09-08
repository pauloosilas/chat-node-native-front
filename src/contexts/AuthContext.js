import React, { useState, useEffect, createContext } from "react";
import { User } from "../api";

export const AuthContext = createContext();

const userController = new User();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(false);
    })();
  }, []);

  const reLogin = async (refreshToken) => {};

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

  const logout = async () => {};

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
