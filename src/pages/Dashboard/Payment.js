import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>

            <h2 className='text-2xl'>Please pay for {id}</h2>
            <div class="card lg:card-side bg-base-100 shadow-xl my-10">

                <div className='card-body w-50 max-w-md '>
                    <p className="card-title text-success text-left font-bold">Hello {order.user}</p>
                    <h2 className="card-title text-center">Pay for {order.tool}</h2>
                    <p className='text-left'>please pay: ${order.totalprice}</p>
 
                </div>

                <div class="card-body w-50 max-w-md">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;