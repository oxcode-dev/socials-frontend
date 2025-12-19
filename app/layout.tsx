'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContextProvider } from './../contexts/ToastContext'
import ToastNotification from "@/components/ToastNotification";
import Providers from "./provider";
import ReduxProvider from "@/store/ReduxProvider";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ScrollToTop = ({ 
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const location = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ReduxProvider >
            <ToastContextProvider>
              <ToastNotification />
              <ScrollToTop>
                {children}
              </ScrollToTop>
            </ToastContextProvider>
          </ReduxProvider>
        </Providers>
      </body>
    </html>
  );
}
