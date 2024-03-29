import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
    PaymentFormContainer,
    FormContainer,
    PaymentButton,
} from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async e => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch(
            '/.netlify/functions/create-payment-intent',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: amount * 100 }),
            }
        ).then(res => res.json());

        const {
            paymentIntent: { client_secret },
        } = response;

        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else if (paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment Successful');
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} inverted>
                    Pay Now
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
};

export default PaymentForm;
