import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

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
      setUser({ username: "Paulo" });
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
