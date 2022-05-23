import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../firebase.init';

const ToolPurchase = () => {
    const { toolId } = useParams();
    const [user, loading] = useAuthState(auth);
    const [tool, setTool] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/tools/${toolId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, []);



    const handleOrder = event => {
        event.preventDefault();
        let order = {
            toolId: tool?._id,
            tool: tool?.name,
            price: tool?.price,
            quantity: event.target.order.value,
            user: user?.email,
            userName: user?.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        if (event.target.order.value > tool.availableQuantity || event.target.order.value < tool.minimumQuantity) {
            alert('Place Valid Quantity')
        } else {
            fetch("http://localhost:5000/orders", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    alert("order placed..")
                    event.target.reset()
                })
        };




    }

    return (
        <div>
            {/* <h1>This is Tool Purchase</h1>
            <h3 className='text-3xl mt-5 mb-5 font-medium'>Add a new Inventory</h3>
             */}
            <div className='container '>
                <form className='flex flex-col w-full max-w-lg m-auto py-10 mt-10 px-10 border' onSubmit={handleOrder} >

                    <h2 className='text-left text-lg font-bold  text-gray-700 dark:text-gray-200 md:text-xl mb-2'>Name: {tool?.name} </h2>
                    <h2 className='text-left text-lg font-bold  text-gray-700 dark:text-gray-200 md:text-xl mb-2'>Price: {tool?.price} </h2>

                    <h1 className="text-left text-lg font-bold mb-3  text-gray-700 dark:text-gray-200 md:text-xl">items available {tool.availableQuantity}  </h1>
                    <h1 className="text-left text-lg font-bold mb-3  text-gray-700 dark:text-gray-200 md:text-xl">minimum Quantity {tool.minimumQuantity}  </h1>
                    <input className='mb-2 input input-bordered w-full max-w-md' name='name' type="text" disabled value={user?.displayName || ""}
                    />

                    <input name='email' type="email" disabled value={user?.email || ""} className="mb-2 input input-bordered w-full max-w-md" />
                    <input name='order' type="number" placeholder="Input Orders" className="input mb-2 input-bordered w-full max-w-md" />
                    <input name='address' type="text" placeholder="Address" className="input input-bordered mb-2 w-full max-w-md" />
                    <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered mb-2 w-full max-w-md" />
                    <button
                        className="mt-4 w-full bg-gray-600 hover:bg-gray-800 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ToolPurchase;