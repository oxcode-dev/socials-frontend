import Link from 'next/link'

type LoginFormProp = {
    email: string
    password: string
    remember_me: boolean
};


const SignUpForm = () => {
    return (
        <>

            <form className="flex flex-col w-full space-y-4">
                <div>
                    <input type="email" placeholder="Your Email" className="input bg-white border-gray-500" />
                </div>
                <div>
                    <input type="password" placeholder="********" className="input bg-white border-gray-500" />
                </div>

                <div className="flex justify-between items-center py-1.5">
                    <div>
                        <label className="label text-sm">
                            <input 
                                type="checkbox" 
                                defaultChecked
                                className="checkbox checkbox-primary checked:text-white checked:bg-primary checked:border-transparent checkbox-sm" 
                            />
                            Remember me
                        </label>
                    </div>

                    <div>
                        <Link href="/auth/forgot-password" className="text-sm text-gray-500 font-medium underline">
                            Forgot Password?
                        </Link>
                    </div>

                </div>


                <div className="w-full">
                    <button className="btn btn-primary w-full">Sign In</button>
                </div>
            </form>

        </>
    )
}

export default SignUpForm;