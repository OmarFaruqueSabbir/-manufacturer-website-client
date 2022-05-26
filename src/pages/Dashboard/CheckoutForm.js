import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError,setCardError] = useState('')
    const [success,setSuccess] = useState('')
    const [transactionId,setTransactionId] = useState('')
    const [processing,setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const {_id,price,user,userName} = order;

    useEffect(()=>{
        fetch('https://frozen-river-30466.herokuapp.com/create-payment-intent',{
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        }).then(res => res.json())
        .then(data => {
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        });
    },[price])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card,
            });

        if(error){
            setCardError(error?.message || '');
            setSuccess('')
            setProcessing(true);
        }
        //confirm card payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: userName,
                  email: user
                },
              },
            },
          );

          if(intentError){
            setCardError(error?.message || '');
            success('')
          }else{
              setCardError('');
              setTransactionId(paymentIntent.id)
              setSuccess('Your Payment is Processed!!')

                    //store payment on db
        const payment = {
            order: _id,
            transactionId: paymentIntent.id
        }
        fetch(`https://frozen-river-30466.herokuapp.com/order/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        }).then(res => res.json())
        .then(data => {
            setProcessing(false)
            console.log(data)
        })
              
          }
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-success mr-80 btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
        {
            cardError && <p className='text-red-500'>{cardError}</p>
        }
        {
            success && <div className='text-green-500'>
                <p>{success}</p>
                <p>Transaction Id is: <span className='text-purple-500'>{transactionId}</span> </p>

            </div>
        }
        </div>
    );
};

export default CheckoutForm;