import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

function App() {
    const [currentUser, setCurrentUser] = useState();
    
    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            console.log(user)
        })

        return () => {
            unsubscribeFromAuth();
        }
    }, []);


    return (
        <div>
            <Header currentUser={currentUser} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/signin" element={<SignInAndSignUpPage />} />
            </Routes>
        </div>
    );
}

export default App;
