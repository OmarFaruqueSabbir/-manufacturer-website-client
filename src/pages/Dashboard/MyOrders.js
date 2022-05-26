import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import DeleteModal from './DeleteModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null)
 

    const { data: orders, isLoading,refetch } = useQuery('orders', () => fetch(`https://frozen-river-30466.herokuapp.com/order?user=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2>Orders: {orders?.length} </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

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
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
               deleteOrder && <DeleteModal
               deleteOrder={deleteOrder}
               setDeleteOrder={setDeleteOrder}
               refetch={refetch}
               ></DeleteModal> 
            }
        </div>
    );
};

export default MyOrders;