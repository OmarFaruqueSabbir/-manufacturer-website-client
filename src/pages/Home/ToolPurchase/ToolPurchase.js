import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const ToolPurchase = () => {
    const { toolId } = useParams();
    const [user, loading] = useAuthState(auth);
    const [tool, setTool] = useState({});
    const [control, setControl] = useState(false);

    const [agree, setAgree] = useState(true)


    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [control]);


    
    const handleOrder = event => {
        event.preventDefault();
        const orderQuantity= parseInt(event.target.order.value)
        const newQuan= parseInt(tool.availableQuantity) - orderQuantity;
        
        const total=tool?.price * orderQuantity;
        console.log(newQuan)
        console.log(typeof(newQuan))

        let order = {
            toolId: tool?._id,
            tool: tool?.name,
            price: tool?.price,
            totalprice: total,
            quantity: event.target.order.value,
            user: user?.email,
            userName: user?.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        if (event.target.order.value > tool.availableQuantity) {
            setAgree(!agree)
            toast.error('Sorry!! Item amount exceeded')

        } else if (event.target.order.value < tool.minimumQuantity) {
            setAgree(!agree)
            toast.error('Please increase order amount')
        } else {
            setAgree(agree)
            fetch(`http://localhost:5000/order/${toolId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({order, newQuan})
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success("order placed..")
                    setControl(!control)
                    event.target.reset()
                })
        };
    }

    return (
        <div>
            <h3 className='text-3xl mt-5 mb-5 font-medium'>Please Place Your Order</h3>
            
            <div className='container mx-auto'>
                <form className='flex flex-col w-full max-w-lg m-auto py-10 mt-10 px-10 border' onSubmit={handleOrder} >

                    <h2 className='text-left text-lg font-base  text-gray-700 dark:text-gray-200 md:text-xl mb-2'><strong>Name:</strong>  {tool?.name}  </h2>

                    <h2 className='text-left text-lg font-base  text-gray-700 dark:text-gray-200 md:text-xl mb-2'> <strong>Price: </strong>{tool?.price} </h2>

                    <h1 className="text-left text-lg font-base mb-3  text-gray-700 dark:text-gray-200 md:text-xl"><strong>Items available : </strong>  {tool.availableQuantity}  </h1>

                    <h1 className="text-left text-lg font-base mb-3  text-gray-700 dark:text-gray-200 md:text-xl"><strong>Minimum Quantity : </strong> {tool.minimumQuantity}  </h1>

                    <input className='mb-2 input input-bordered w-full max-w-md' name='name' type="text" disabled value={user?.displayName}
                    />

                    <input name='email' type="email" disabled value={user?.email || ""} className="mb-2 input input-bordered w-full max-w-md" />

                    <label htmlFor="email" className="text-sm text-left font-medium">Input Order Quantity</label>
                    <input name='order' defaultValue={tool?.minimumQuantity} type="number" className="input mb-2 input-bordered w-full max-w-md" />

                    <input name='address' type="text" placeholder="Address" className="input input-bordered mb-2 w-full max-w-md" />

                    <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered mb-2 w-full max-w-md" />

                    <button disabled={!agree}
                        className="mt-4 w-full bg-gray-900 disabled:bg-gray-400 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
                        type="submit"
                    >
                        Submit
                    </button>

                </form>
                <ToastContainer />
            </div>


        </div>
    );
};

export default ToolPurchase;