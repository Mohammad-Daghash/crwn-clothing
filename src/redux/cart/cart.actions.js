import store from '../store';
import CartActionTypes from './cart.types';

export const toggleCartHidden = () =>
    store.dispatch({
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
    });
