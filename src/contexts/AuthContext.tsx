import { createContext, ReactNode } from "react";

import * as AuthSession from "expo-auth-session";

import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  avatarUrl: string;
}


export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}


interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  console.log(AuthSession.makeRedirectUri({ useProxy: true }));

  async function signIn() {
    console.log("sign in -_");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "caramelo",
          avatarUrl: "https://shorturl.at/fhyA1"

        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}