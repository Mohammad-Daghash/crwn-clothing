import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CollectionsContext from '../../contexts/collections/collections.context';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = () => {
    const collections = useContext(CollectionsContext);
    const { collectionId } = useParams();
    const collection = collections[collectionId];
    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPage;
