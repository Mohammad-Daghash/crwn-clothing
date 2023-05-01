import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const history = useNavigate();
    const match = useLocation();

    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history(`${match.pathname}${linkUrl}`)}
        >
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>

            <div className="content">
                <div className="title">{title.toUpperCase()}</div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
