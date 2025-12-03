import React, { createContext, useState } from "react";
import { JSX } from "react/jsx-runtime";

type TokenContextType = {
    token: string;
    updateToken: (token: string) => void;
};

export const ToastContext = createContext<TokenContextType | null>(null);

// export const ToastContext = React.createContext({} as TokenContextType);

type PropsType = {
    children:  React.ReactNode;
}

export const ToastProvider = ({ children }: PropsType) : JSX.Element => {
    const [token, setToken] = useState('');
    const updateToken = (string: string) => setToken(string);

    return (
        <ToastContext.Provider value={{ token, updateToken }}>
            {children}
        </ToastContext.Provider>
    )
}
