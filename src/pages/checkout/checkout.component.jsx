import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import PaymentForm from '../../components/payment-form/payment-form.component';

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Name</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            {process.env.NODE_ENV === 'development' && (
                <div className="test-warning">
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
                </div>
            )}
            <PaymentForm />
        </div>
    );
};

export default CheckoutPage;
