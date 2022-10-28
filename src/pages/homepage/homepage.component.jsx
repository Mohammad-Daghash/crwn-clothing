import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to my Homepage</h1>
            <Directory />
            {/* <div className="directory-menu">
                <MenuItem title='HATS' />
                <MenuItem title='JACKETS' />
                <MenuItem title='SHOES' />
                <MenuItem title='WOMENS' />
                <MenuItem title='MENS' />
            </div> */}
        </div>
    );
};

export default HomePage;
