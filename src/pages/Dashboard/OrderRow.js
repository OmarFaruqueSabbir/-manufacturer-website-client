import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteOrder }) => {
    const { user, userName, quantity, tool } = order;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{user}</td>
            <td>{userName}</td>
            <td>{quantity}</td>
            <td>{tool}</td>
            <td>
                <label onClick={() => setDeleteOrder(order)} for="delete-confirm-modal" className="btn btn-sm btn-error">Delete</label>


            </td>
            <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-sm btn-success px-5'>Pay</button> </Link>}
                {(order.price && order.paid) && <div>

                    <p><span className='text-success font-bold'>PAID</span></p>

                    <p>Transaction id: <span className='text-orange-500 font-normal'>{order.transactionId}</span></p>
                </div>}
            </td>
        </tr>
    );
};

export default OrderRow;