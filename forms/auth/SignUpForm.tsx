import Link from 'next/link'

type LoginFormProp = {
    email: string
    password: string
    remember_me: boolean
};


const SignUpForm = () => {
    return (
        <>

            <form className="flex flex-col w-full space-y-4 text-gray-500">
                <div>
                    {/* <label htmlFor="first_name" className="font-medium text-gray-500 mb-1">First Name</label> */}
                    <input type="text" id="first_name" placeholder="First Name" className="input bg-white border-gray-500" />
                </div>
                <div>
                    {/* <label htmlFor="last_name" className="font-medium text-gray-500 mb-1">Last Name</label> */}
                    <input type="text" id="last_name" placeholder="Last Name" className="input bg-white border-gray-500" />
                </div>
                <div>
                    {/* <label htmlFor="username" className="font-medium text-gray-500 mb-1">Username</label> */}
                    <input type="text" id="username" placeholder="Your Username" className="input bg-white border-gray-500" />
                </div>
                <div>
                    {/* <label htmlFor="email" className="font-medium text-gray-500 mb-1">Email</label> */}
                    <input type="email" id="email" placeholder="Your Email" className="input bg-white border-gray-500" />
                </div>
                <div>
                    {/* <label htmlFor="email" className="font-medium text-gray-500 mb-1">Password</label> */}
                    <input type="password" id="password" placeholder="********" className="input bg-white border-gray-500" />
                </div>

                <div className="w-full pt-4">
                    <button className="btn bg-gray-500 border-gray-300 w-full">Get Started</button>
                </div>
            </form>

        </>
    )
}

export default SignUpForm;