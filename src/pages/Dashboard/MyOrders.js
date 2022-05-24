import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?user=${user.email}`,{
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res',res)
                    if(res.status === 401 || res.status === 403){
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });
        }
    }, [user])

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
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>UserMail</th>
                            <th>User</th>
                            <th>Quantity</th>
                            <th>Tool</th>
                            <th>Action</th>
                            <th>Pay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) =>
                                <tr className='hover' key={order._id}>
                                <th>{index+1}</th>
                                <td>{order.user}</td>
                                <td>{order.userName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.tool}</td>
                                {/* <td><button onClick={() => deleteItem(order._id)} className='btn bg-red-600' >Delete</button></td> */}
                                <td><button onClick={() => deleteItem(order._id)} className='btn bg-red-600 text-white'  >Cancel</button></td>
                                <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-success px-5'>Pay</button> </Link> }
                                {(order.price && order.paid) && <div>
                                    
                                    <p><span className='text-success font-bold'>PAID</span></p> 

                                    <p>Transaction id: <span className='text-orange-500 font-normal'>{order.transactionId}</span></p> 
                                </div> }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;