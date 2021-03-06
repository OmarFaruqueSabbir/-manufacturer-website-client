import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef("");
    const passRef = useRef("");

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, loading1] = useSendPasswordResetEmail(
        auth);

    const [token] = useToken(user)

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

        if (token) {
            navigate(from, { replace: true });
        }


 
    const gotoRegister = () => {
        navigate('/register');
    }

    if (loading) {
        return <Loading />
    }

    let errorMessage;

    if (error) {
        errorMessage =
            <p className='text-red-600'>Error: {error?.message}
            </p>
    }



    const handleLogIn = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

       await signInWithEmailAndPassword(email, password);

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent for reset');
        } else {
            toast('please enter your mail');
        }
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">

                {/* <!-- Component Start --> */}
                <h1 className="font-bold text-2xl">Login Here </h1>
                <form onSubmit={handleLogIn} className="flex flex-col bg-white rounded shadow-lg p-10 mt-12" action="" >
                    <div>
                        <label htmlFor="email" className="text-sm text-left font-medium">Email</label>

                        <div className="relative mt-1">
                            <input
                                ref={emailRef}
                                type="email"
                                id="email"
                                name='email'
                                className="w-80 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium">Password</label>

                        <div className="relative mt-1">
                            <input
                                ref={passRef}
                                type="password"
                                id="password"
                                name='password'
                                className="w-80 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <button className="flex items-center justify-center h-12 px-6 w-80 bg-gray-800 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-gray-900">Login</button>
                    <div className="flex mt-6 justify-center text-xs">
                        <p onClick={resetPassword} className="text-blue-400 pr-5  hover:text-blue-500">Forgot Password?</p>
                        <span className="mx-2 text-gray-300">/</span>
                        <p className="text-blue-400 hover:text-blue-500">
                           <span onClick={gotoRegister}>New User? Sign Up here..</span></p>
                    </div>
                    {
                            errorMessage
                    }
                    <div className="divider">OR</div>
                    <ToastContainer />
                    <SocialLogin />

                </form>
                {/* <!-- Component End  --> */}
            </div>
        </div>
    );
};

export default Login;