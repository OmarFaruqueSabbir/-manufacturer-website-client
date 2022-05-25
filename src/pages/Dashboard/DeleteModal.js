import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteModal = ({ deleteOrder, setDeleteOrder,refetch }) => {
    const { tool, user } = deleteOrder;
    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${user}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Order: ${tool} is deleted`)
                    setDeleteOrder(null);
                    refetch();
                    
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Do you want to Cancel your Order?!</h3>
                    <p className="py-4">Pressing Delete button will remove your order from our records.</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">DELETE</button>
                        <label for="delete-confirm-modal" className="btn btn-xs">Close</label>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div >


    );
};

export default DeleteModal;