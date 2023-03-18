import { call, put, takeLatest, all } from '@redux-saga/core/effects';
import {
    firestore,
    collectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
    fetchCollectionsFailure,
    fetchCollectionsSuccess,
} from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = yield firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(collectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
