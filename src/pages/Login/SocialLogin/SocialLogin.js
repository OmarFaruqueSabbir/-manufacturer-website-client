import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user)

    const navigate = useNavigate();

    if (loading) {
        return <Loading />
    }

    let errorElement;
    if (error) {
        errorElement =
            <p className='text-red-700 '>Error: {error?.message}
            </p>
    }
    if (token) {
        navigate('/home')
    }
    return (
        <>
            {
                errorElement
            }
            <button onClick={() => signInWithGoogle()} class="flex items-center justify-center h-12 px-6 w-80 bg-gray-800 mt-3 rounded font-semibold text-sm text-blue-100 hover:bg-gray-900"><span className='pr-3'>Login with Google</span> <FcGoogle style={{ height: '70px' }} /> </button>
        </>
    );

};

export default SocialLogin;