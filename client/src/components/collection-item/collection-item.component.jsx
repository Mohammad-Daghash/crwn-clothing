import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/cart.provider';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item;
    const { addItem } = useContext(CartContext)
    
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    );
};

export default CollectionItem;
