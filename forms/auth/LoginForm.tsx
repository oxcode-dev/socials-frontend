
const LoginForm = () => {
    return (
        <>

            <form className="flex flex-col w-full space-y-4">
                <div>
                    <input type="email" placeholder="Your Email" className="input bg-white border-gray-500" />
                </div>
                <div>
                    <input type="password" placeholder="********" className="input bg-white border-gray-500" />
                </div>

                <div className="w-full">
                    <button className="btn btn-primary w-full">Primary</button>
                </div>
            </form>

        </>
    )
}

export default LoginForm;