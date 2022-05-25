import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() => {
        fetch('http://localhost:5000/order',{
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const deleteItem = id => {
        const agree =   window.confirm('Want to delete Items?');
        if (agree) {
            const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }
    return (
        <div>
            <h2>Orders: {orders?.length} </h2>

            <div class="overflow-x-auto">
            {
                    orders.length > 0 ? 
                    <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>UserMail</th>
                            <th>User</th>
                            <th>ToolId</th>
                            <th>Tool</th>
                            <th>Quantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order,index) =>
                                <tr className='hover' key={order._id}>
                                <th>{index+1}</th>
                                <td>{order.user}</td>
                                <td>{order.userName}</td>
                                <td>{order.toolId}</td>
                                <td>{order.tool}</td>
                                <td>{order.quantity}</td>
                                <td onClick={() => deleteItem(order._id)}><button  className="font-medium text-red-500 dark:text-red-600 hover:underline">Delete</button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
                :
                <></>
                    
}

            </div>
        </div>
    );
};

export default ManageOrders;