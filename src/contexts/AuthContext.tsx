import { createContext, ReactNode } from "react";


interface UserProps {
  name: string;
  avatarUrl: string;
}


interface AuthContextProps {
  user: UserProps;
  signIn: () => Promise<void>;
}


interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {

  async function signIn() {
    console.log("sign in -_")
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
  )
}