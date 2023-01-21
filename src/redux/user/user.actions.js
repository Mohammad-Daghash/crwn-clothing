import store from '../store';
import { UserActionTypes } from './user.types';

export const setCurrentUser = user =>
    store.dispatch({
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user,
    });
