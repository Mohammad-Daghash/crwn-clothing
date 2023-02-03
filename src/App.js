import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

function App() {
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });

        return () => {
            unsubscribeFromAuth();
        };
    }, []);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
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
