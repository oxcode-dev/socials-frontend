'use client';

// import { Logo } from '@/components/Logo';
// import useRedirectIfAuthenticated from '@/hooks/useRedirectIfAuthenticated';
import Image from 'next/image'
import Link from 'next/link';
import React, { Children } from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
   
    // useRedirectIfAuthenticated('/dashboard')

    return (
        <div>
            <div className="relative">

                <div className="relative w-full h-screen">
                    <div className="w-full h-full bg-white min-h-screen bg-linear-to-br from-0% to-60% from-green-50 to-white">
                        <div className="flex w-full md:max-w-sm mx-auto px-4 flex-col items-center justify-center h-full">
                            <div className="py-6 px-4 md:px-8 w-full">
                                <Link href="/">
                                    {/* <Logo /> */}
                                </Link>

                                <div className="w-full">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default layout;