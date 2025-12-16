'use client'

import { useToastContext } from '@/contexts/ToastContext';
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    email: yup.string()
        .required('Please, provide your email address')
        .email('Please, provide a valid email address'),
    password: yup.string().required('Please, provide your password!'),
    rememberMe: yup.boolean()
})

type LoginFormProp = {
    email: string
    password: string
    rememberMe: false
};


const LoginForm = () => {
    const { showToast } = useToastContext()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<LoginFormProp>({
        //@ts-ignore
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<LoginFormProp> = (data) => {
        console.table(data)
        showToast('heading', 'message', 'warning', true, 10)
    }

    // showToast()
    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full space-y-4">
                <div>
                    <input 
                        {...register("email",  { required: true })} 
                        type="email" placeholder="Your Email" className="input bg-white border-gray-500 text-gray-600" 
                    />
                    {errors.email?.message && <span className="text-red-600 text-xs font-medium">Email is required</span>}
                </div>
                <div>
                    <input 
                        {...register("password",  { required: true })} 
                        type="password" placeholder="********" className="input bg-white border-gray-500 text-gray-600" 
                    />
                    {errors.password?.message && <span className="text-red-600 text-xs font-medium">Password is required</span>}
                </div>

                <div className="flex justify-between items-center py-1.5">
                    <div>
                        <label className="label text-sm">
                            <input 
                                type="checkbox" 
                                defaultChecked={false}
                                {...register("rememberMe")} 
                                className="checkbox checkbox-neutral checked:text-white checked:bg-gray-600 checked:border-transparent checkbox-sm" 
                            />
                            Remember me
                        </label>

                         {errors.rememberMe?.message && <span className="text-red-600 text-xs font-medium">Password is required</span>}

                    </div>

                    <div>
                        <Link href="/auth/forgot-password" className="text-sm text-gray-500 font-medium underline">
                            Forgot Password?
                        </Link>
                    </div>

                </div>

                <div className="w-full pt-4">
                    <button
                        type="submit"
                        className="btn bg-gray-500 border-gray-300 w-full"
                    >Sign In</button>
                </div>
            </form>

        </>
    )
}

export default LoginForm;