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

                <div className="w-full pt-4">
                    <button className="btn bg-gray-500 border-gray-300 w-full">Get Started</button>
                </div>
            </form>

        </>
    )
}

export default SignUpForm;