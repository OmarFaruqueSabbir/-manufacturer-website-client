import React from 'react';
import { Link } from 'react-router-dom';

const ManageOrderRow = ({order, index, setDeleteOrder}) => {
    const { user, userName, quantity, tool ,toolId} = order;
    console.log(order)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user}</td>
            <td>{userName}</td>
            <td>{toolId}</td>
            <td>{tool}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeleteOrder(order)} for="delete-confirm-modal" className="btn btn-sm btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ManageOrderRow;