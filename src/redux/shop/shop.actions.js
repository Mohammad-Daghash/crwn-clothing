import store from '../store';
import ShopActionTypes from './shop.types';

export const updateCollections = collectionsMap =>
    store.dispatch({
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collectionsMap,
    });
