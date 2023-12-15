import React, { createContext, useContext, useState } from "react";
import axios from "axios";
interface IAuthContext {
  signup: (username: string, email: string, password: string) => void;
  token: string;
  loading: boolean;
}

const AuthContext = createContext<IAuthContext>({
  signup: () => {},
  token: "",
  loading: false,
});

export const useAuth = (): IAuthContext => useContext(AuthContext);

interface AuthProviderProp {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProp> = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = (username: string, email: string, password: string) => {
    setLoading(true);
    console.log("Working");
    console.log(apiUrl);
    axios
      .post(`${apiUrl}/auth/signup`, {
        username: username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setToken("");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(true));
  };

  const values: IAuthContext = {
    token,
    loading,
    signup,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
