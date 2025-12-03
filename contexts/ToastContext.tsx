'use client'

import React, { createContext, useState } from "react";
import { JSX } from "react/jsx-runtime";

type ToastType = {
    type: "success" | 'error' | 'warning';
    message: string;
    heading: string;
    show: boolean;
}

type ToastContextType = {
    toast: ToastType;
    hideToast: () => void;
    showToast: (toast: {}) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);

// export const ToastContext = React.createContext({} as ToastContextType);

type PropsType = {
    children:  React.ReactNode;
}

export const ToastContextProvider = ({ children }: PropsType) : JSX.Element => {
    const [toast, setToast] = useState <ToastType>({
        type: 'success',
        message: '',
        heading: '',
        show: false
    });

    const showToast = () => {
        setToast({
            type: 'success',
            message: '',
            heading: '',
            show: false
        })
    }

    const hideToast = () => {
        setToast({
            type: 'success',
            message: '',
            heading: '',
            show: false
        })
    }

    return (
        <ToastContext.Provider value={{ toast, showToast, hideToast }}>
            {children}
        </ToastContext.Provider>
    )
}