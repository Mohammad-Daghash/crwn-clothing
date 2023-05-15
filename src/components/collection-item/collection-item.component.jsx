import React from 'react';
import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    AddButton,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    );
};

export default CollectionItem;
