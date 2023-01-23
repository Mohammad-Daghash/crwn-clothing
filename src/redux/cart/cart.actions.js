import store from '../store';
import CartActionTypes from './cart.types';

export const toggleCartHidden = () =>
    store.dispatch({
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
    });

export const addItem = item =>
    store.dispatch({
        type: CartActionTypes.ADD_ITEM,
        payload: item,
    });
