import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    firestore,
    collectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // const unsubscribeFromAuth = null;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(async snapshot => {
            const collectionsMap = collectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            setLoading(false);
        });
    }, []);

    return (
        <div className="shop-page">
            <Routes>
                <Route
                    index
                    element={
                        <CollectionsOverviewWithSpinner isLoading={loading} />
                    }
                />
                <Route
                    path="/:collectionId"
                    element={<CollectionsPageWithSpinner isLoading={loading} />}
                />
            </Routes>
        </div>
    );
};

export default ShopPage;
