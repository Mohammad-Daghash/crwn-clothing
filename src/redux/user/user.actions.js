import store from '../store';

export const setCurrentUser = user =>
    store.dispatch({
        type: 'SET_CURRENT_USER',
        payload: user,
    });
