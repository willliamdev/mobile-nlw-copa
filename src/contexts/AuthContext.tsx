import { createContext, ReactNode, useState, useEffect } from "react";

import * as Google from "expo-auth-session/providers/google";

import * as AuthSession from "expo-auth-session";

import * as WebBrowser from "expo-web-browser";

import credentials from "../../googleCredentials.json";


WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  isUserLoading: boolean;
  avatarUrl: string;
}


export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}


interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const [isUserLoading, setIsUserLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: credentials.web.client_id,
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ["profile", "email"]
  });

  async function signIn() {
    try {
      setIsUserLoading(true);
      await promptAsync();

    } catch (error) {
      console.log(error);
      throw error;

    } finally {
      setIsUserLoading(false);
    }
  }

  async function signInWithGoogle(access_token: string) {
    console.log("AUTHENTICATION TOKEN: " + access_token);

  }

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken);
    }

  }, [response]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}