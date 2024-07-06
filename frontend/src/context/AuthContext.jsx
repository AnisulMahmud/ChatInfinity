import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({}) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
