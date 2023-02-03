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

export const removeItem = item =>
    store.dispatch({
        type: CartActionTypes.REMOVE_ITEM,
        payload: item,
    });

export const clearItemFromCart = item =>
    store.dispatch({
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item,
    });
