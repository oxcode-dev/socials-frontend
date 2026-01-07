'use client'

import { useState } from "react";
import Sidebar from "./Sidebar";

type PropType = {
    children: any
}

export default function AppLayout ({ children }: PropType) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="flex min-h-screen bg-zinc-50 font-sans">
                <Sidebar />
                <div className="fixed md:hidden bg-gray-500/50 w-full h-full"></div>
                <main className="w-full md:ml-64 text-gray-500">
                    <div className="p-2 md:p-4">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

