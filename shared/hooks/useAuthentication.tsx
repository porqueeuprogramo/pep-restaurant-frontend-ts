import { IAuthenticationContext, IAuthenticationProvider, IUser } from "@shared/types";
import React from "react";
import { createContext, useState, useContext } from "react";
import useSWR from "swr";

export const AuthenticationContext = createContext<IAuthenticationProvider | {}>({});

export function AuthenticationProvider({ children }: IAuthenticationContext) {
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    return (
        <AuthenticationContext.Provider
            value={{
                authenticated,
                setAuthenticated,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
}

export function useAuthentication() {
    const context = useContext(AuthenticationContext) as IAuthenticationProvider;
    return context;
}
