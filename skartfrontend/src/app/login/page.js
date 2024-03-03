"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


const login = () => {
    const router = useRouter();

    const success = () => toast.success('Login is successfully done!', {
        position: "top-center",
        pauseOnHover: true,
        theme: "light",
        autoClose: 2000,

    });

    const error = () => toast.error('Some Error Occured..', {
        position: "top-center",
        pauseOnHover: true,
        theme: "light",
        autoClose: 2000,

    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3005/api/login', { email, password });
            success();
            setTimeout(() => {
                router.push('http://localhost:3000/');
            }, 2000);
        }
        catch (err) {
            console.log(err);
            error();
        }
        setEmail('');
        setPassword('');
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <ToastContainer
                position="top-center"

            />

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder='Enter your email'
                                className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder='Enter your password'
                                className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                        <div className="text-sm mt-3">
                            <Link href="/forgetpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not registered yet?{' '}
                    <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default login
