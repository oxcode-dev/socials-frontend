'use client'

import SignUpForm from '@/forms/auth/SignUpForm'
// import RegistrationForm from '@/forms/auth/RegistrationForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="flex flex-col justify-center h-full">
                <div className="py-4 md:py-8 space-y-2 text-center">
                    <p className="text-xl md:text-3xl font-bold text-gray-800">
                        Reset Password
                    </p>

                    <p className="text-sm text-gray-500 font-medium">
                        Please provide the OTP sent to your email address to reset your password.
                    </p>
                </div>

                <div className="w-full space-y-4">
                    <div>
                        {/* <SignUpForm /> */}
                        <form className="flex flex-col w-full space-y-4">
                            <div>
                                <input type="email" placeholder="Your Email" className="input bg-white border-gray-500" />
                            </div>

                            <div className="w-full pt-4">
                                <button className="btn bg-gray-500 border-gray-300 w-full">Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="pt-4 md:pt-6 text-center">
                        <p className="text-sm text-gray-500 font-medium">
                            <Link href="/auth" className="text-gray-600 font-semibold underline">
                               Back to Login
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page