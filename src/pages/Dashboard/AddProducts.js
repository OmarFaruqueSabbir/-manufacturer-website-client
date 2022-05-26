import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data,event) => {
        const url = `https://frozen-river-30466.herokuapp.com/tools`
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
                toast.success("new item added..")
                event.target.reset()
            })
    };

    return (
        <div>
            <h3 className='text-3xl mt-5 mb-5 font-medium'>Add a Product</h3>
            <div className='container '>
                <form className='flex flex-col w-full max-w-lg m-auto py-10 mt-10 px-10 border' onSubmit={handleSubmit(onSubmit)}>

                    <input className='mb-2 py-2' placeholder='Product Name' type="text" {...register("name")} />
                    <input className='mb-2 py-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2 py-2' placeholder='Photo URL' type="text" {...register("img")} />
                    {errors.img && <p>Please enter image url.</p>}
                    <textarea className='mb-2' placeholder='Product Details' {...register("description")} /> 
                    <input className='mb-2 py-2' placeholder='Minimum Quantity' type="number" {...register("minimumQuantity")} />
                    <input className='mb-2 py-2' placeholder='Available Quantity' type="number" {...register("availableQuantity")} />
                    
                    <button
                        className="mt-4 w-full bg-gray-600 hover:bg-gray-800 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div >
    );
};

export default AddProducts;