import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import Loading from '../../../components/Loading/Loading';
import useToken from '../../../hooks/useToken';


const Register = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const [token] = useToken(user)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }


    const gotoLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading />
    }

    let errorMessage;

    if (error || error1) {
        errorMessage =
            <p className='text-red-600'>Error: {error?.message}
            </p>
    }

 


    const handleRegister = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const namee = nameRef.current.value;
        console.log(namee)

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: namee });
    }

    return (
        <div className=" flex flex-col items-center justify-center bg-gray-200 text-gray-700">

            {/* <!-- Component Start --> */}
            <h1 className="font-bold text-2xl mt-12">Register Here </h1>
            <form onSubmit={handleRegister}  className="flex flex-col bg-white rounded shadow-lg p-8 mt-12 mb-18" action="" >
                <div>
                <label className="label">
                <span className="label-text">Name</span>
                </label>

                    <div className="relative mt-1">
                        <input
                            ref={nameRef}
                            type="text"
                            id="name"
                            name='name'
                            className="w-80 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                            placeholder="Enter Name"
                            
                        />

                    </div>
                </div>
                <div>
                <label className="label">
                                <span className="label-text">Email</span>
                </label>

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
                <label className="label">
                    <span className="label-text">Password</span>
                </label>

                    <div className="relative mt-1">
                        <input
                            ref={passwordRef}
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
                <button type='submit' className="flex items-center justify-center h-12 px-6 w-80 bg-gray-800 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-gray-900">Submit</button>
                <div className="flex mt-6 justify-center text-xs">
                    <p className="text-blue-400 hover:text-blue-500">
                        <span onClick={gotoLogin}>Already User? Login here</span></p>
                </div>
                {
                    errorMessage
                }
                <div className="divider">OR</div>
                <SocialLogin />
            </form>
            {/* <!-- Component End  --> */}
        </div>
    );
};

export default Register;