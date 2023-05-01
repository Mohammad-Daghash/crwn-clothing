import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { toggleCartHiddenVar } from '../../graphql/cache';
import { gql, useQuery } from '@apollo/client';

const TOGGLE_CART_HIDDEN = gql`
    query ToggleCartHidden {
        cartHidden @client
    }
`;

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const {
        data: { cartHidden },
    } = useQuery(TOGGLE_CART_HIDDEN);

    return (
        <div
            className="cart-icon"
            onClick={() => toggleCartHiddenVar(!cartHidden)}
        >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartIcon;
