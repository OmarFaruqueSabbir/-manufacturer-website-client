import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data,event) => {
        const url = `http://localhost:5000/reviews`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // toast("new item added..")
                event.target.reset()
            })
    };
    return (
        <div>
            <h3 className='text-3xl  mt-5 mb-5 font-medium'>Add a Review</h3>
            <div className='container '>
                <form className='flex flex-col w-full max-w-lg m-auto py-10 mt-10 px-10 border' onSubmit={handleSubmit(onSubmit)}>
                    
                    <input className='mb-2 py-2' value={user?.displayName} placeholder='Product Name' {...register("name", { required: true })} />
                    {errors.name && <p>Name is required.</p>}
                    <textarea className='mb-2' placeholder='Comments' {...register("comment")} />
                    <input className='mb-2 py-2' placeholder='Rating' type="number" {...register("rating")} />
                    {/* <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    {errors.img && <p>Please enter image url.</p>} */}
                    <button
                        className="mt-4 w-full bg-gray-900 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
};

export default AddReview;