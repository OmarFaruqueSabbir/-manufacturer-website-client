import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L11vYH24CK2sP5ktWt1TMrAd5GNgVVdNFbCiiewKYxYC0FbQvDJtS2TUOrZ7nBoXzWTWS6yL66xf0UZT74mJJ4a003ioJcDft');

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
            <div className="card lg:card-side bg-base-100 shadow-xl my-10">

                <div className='card-body w-50 max-w-md '>
                    <p className="card-title text-success text-left font-bold">Hello {order.user}</p>
                    <h2 className="card-title text-center">Pay for {order.tool}</h2>
                    <p className='text-left'>please pay: ${order.totalprice}</p>
 
                </div>
                <div className="divider divider-horizontal"></div>

                <div className="card-body w-50 max-w-md">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;