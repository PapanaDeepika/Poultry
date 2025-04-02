 import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}
interface DecodedToken {
    id: string;
    email: string;
    exp: number;
   }
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        handleToken(storedToken);
      }
    };
    loadToken();
  }, []);

  const handleToken = (jwtToken: string) => {
    try {
      const decoded: any = jwtDecode<DecodedToken>(jwtToken);
      const userData: User = {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
      };
      setUser(userData);
      setToken(jwtToken);
      AsyncStorage.setItem("token", jwtToken);
    } catch (error) {
      console.error("Invalid token", error);
    }
  };

  const login = (jwtToken: string) => {
    handleToken(jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    AsyncStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
