import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
            <>
                    <button class="flex items-center justify-center h-12 px-6 w-80 bg-gray-800 mt-3 rounded font-semibold text-sm text-blue-100 hover:bg-gray-900"><span className='pr-3'>Login with Google</span> <FcGoogle style={{height:'70px'}} /> </button>
            </>
        );
   
};

export default SocialLogin;