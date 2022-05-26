import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams()

    const handleSubmit = event => {
        event.preventDefault();

        let profileUpdate = {
            userName: user?.displayName,
            user: user?.email,
            education: event.target.education.value,
            linkedIn: event.target.linkedin.value,
            location: event.target.location.value,
            phone: event.target.phone.value
        }
            fetch(`https://frozen-river-30466.herokuapp.com/profiles/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(profileUpdate)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success('profile info updated..')
                    event.target.reset()
                })
            }
    return (
        <div>
            <h3 style={{ fontFamily: "poppins" }} className='text-3xl mt-5 mb-10 font-bold'>Update Your Profile</h3>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                <input name='name' type="text" disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                <input name='email' type="email" disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />
                <input name='education' type="text" placeholder="Your Education Info" className="input input-bordered w-full max-w-xs" />
                <input name='linkedin' type="text" placeholder="Your linkedIn Profile Link" className="input input-bordered w-full max-w-xs" />
                <input name='location' type="text" placeholder="Your Location Info" className="input input-bordered w-full max-w-xs" />
                <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Submit" className="btn bg-gray-800 w-full max-w-xs" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;