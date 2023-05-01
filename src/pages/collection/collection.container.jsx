import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: title) {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionPageContainer = () => {
    const params = useParams();
    const { loading, data: getCollectionsByTitle } = useQuery(
        GET_COLLECTION_BY_TITLE,
        {
            variables: { title: params.collectionId },
        }
    );
    console.log(getCollectionsByTitle);

    return loading ? (
        <Spinner />
    ) : (
        <CollectionPage collection={getCollectionsByTitle} />
    );
};

export default CollectionPageContainer;
