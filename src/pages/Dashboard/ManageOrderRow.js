import React from 'react';

const ManageOrderRow = ({order, index, setDeleteOrder}) => {
    const { user, userName, quantity, tool ,toolId,} = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user}</td>
            <td>{userName}</td>
            <td>{toolId}</td>
            <td>{tool}</td>
            <td>{quantity}</td>
            <td >{!order.paid? <button className='btn btn-xs btn-success text-red-500'>unpaid</button>: <button className='btn btn-xs btn-success'>{order.transactionId}</button>}</td>
            <td className='text-success'>{order.status}</td>
            <td>
                <label onClick={() => setDeleteOrder(order)} for="delete-confirm-modal" className="btn btn-sm btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ManageOrderRow;