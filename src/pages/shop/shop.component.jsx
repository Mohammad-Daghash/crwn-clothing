import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = () => {
    useEffect(() => {
        fetchCollectionsStart();
    }, []);

    return (
        <div className="shop-page">
            <Routes>
                <Route index element={<CollectionsOverviewContainer />} />
                <Route
                    path="/:collectionId"
                    element={<CollectionPageContainer />}
                />
            </Routes>
        </div>
    );
};

export default ShopPage;

// Note:  Another way to pass isLoading to component
// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';
// import { useSelector } from 'react-redux';
// import {
//     selectIsCollectionFetching,
//     selectIsCollectionsLoaded,
// } from '../../redux/shop/shop.selectors';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

// const isCollectionFetching = useSelector(selectIsCollectionFetching);
// const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);
