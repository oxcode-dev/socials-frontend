'use client'

import React, { createContext, useContext, useState } from "react";
import { JSX } from "react/jsx-runtime";
import { boolean } from "yup";

type ToastType = {
    type: "success" | 'error' | 'warning';
    message: string;
    heading: string;
    show: boolean;
}

type ToastParamentType = {
    heading: string,
    message: string,
    type: "success" | 'error' | 'warning',
    autoClose: boolean,
    closeInSeconds: number
}

type ToastContextType = {
    toast: ToastType;
    hideToast: () => void;
    showToast: (toast: ToastParamentType) => void;
};

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

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

    const showToast = ({
        heading,
        message,
        type = 'success',
        autoClose = true,
        closeInSeconds = 7
    }: ToastParamentType) => {
        setToast({
            type: type,
            message: message,
            heading: heading,
            show: false
        })

        if (autoClose) {
            setTimeout(() => {
                hideToast()
            }, closeInSeconds * 1000)
        }
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

export function useToastContext() {
    const context = useContext(ToastContext);
    if (context === undefined) {
      throw new Error('useToastContext must be used within a ToastContextProvider');
    }
    return context;
}