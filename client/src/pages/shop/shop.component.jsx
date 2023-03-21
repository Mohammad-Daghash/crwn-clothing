import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
    return (
        <div className="shop-page">
            <Routes>
                <Route index element={<CollectionsOverview />} />
                <Route path="/:collectionId" element={<CollectionPage />} />
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
