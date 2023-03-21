import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CurrentUserContext from './contexts/current-user/current-user.context';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    });
                });
            }
            setCurrentUser(userAuth);
        });

        return () => {
            unsubscribeFromAuth();
        };
    }, []);

    return (
        <div>
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
            </CurrentUserContext.Provider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop/*" element={<ShopPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route
                    path="/signin"
                    element={
                        currentUser ? (
                            <Navigate to="/" replace />
                        ) : (
                            <SignInAndSignUpPage />
                        )
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
