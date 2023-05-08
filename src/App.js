import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
    import('./components/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

function App() {
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        checkUserSession();
    }, []);

    return (
        <div>
            <GlobalStyle />
            <Header />
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        {/* <Route path="/" element={<Suspense fallback={<Spinner />}><HomePage /></Suspense>} /> */}
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
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

export default App;
