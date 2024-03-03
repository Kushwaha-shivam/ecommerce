"use client"
import axios from 'axios';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

    const router = useRouter();

    const success = () => toast.success('Sign up is successfully done!', {
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

    })


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3005/api/signup', { name, email, password });
            success();
            setTimeout(() => {
                router.push('http://localhost:3000/login');
            }, 2000);

        }

        catch (err) {
            console.log(err);
            error();
        }

        setName('');
        setEmail('');
        setPassword('');

    }





    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <ToastContainer
                    position="top-center"

                />

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submitHandler}>
                        <div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    name='name'
                                    placeholder='Enter your name'
                                    required
                                    autoComplete='name'
                                    className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    autoComplete='email'
                                    className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    value={password}
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                    autoComplete='current-password'
                                    className="block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>

                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Do You have an account?{' '}
                        <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>

        </>

    )
}

export default SignUp
