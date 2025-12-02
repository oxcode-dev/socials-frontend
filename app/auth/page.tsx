import LoginForm from '@/forms/auth/LoginForm'
import Link from 'next/link'

const Login = () => {
    return (
        <>
            <div className="text-black">
                <div className="py-4 md:py-8 space-y-2 text-center">
                    <p className="text-xl md:text-3xl font-bold text-gray-800">
                        Welcome Back
                    </p>

                    <p className="text-sm text-gray-500 font-medium">
                        Sign in with your email and password.
                    </p>
                </div>

                <div className="w-full space-y-2">
                    <LoginForm />
                   
                    <div className="pt-4 md:pt-6 text-center">
                        <p className="text-sm text-gray-500 font-medium">
                            <span>Don't have an account? </span>
                            <Link href="/auth/register" className="text-gray-600 font-semibold underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login