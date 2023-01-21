import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';

// import store from './redux/store';
// import { setCurrentUser } from './redux/user/user.actions';

// function App({ setCurrentUser }) {
function App() {
    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    // store.dispatch(
                    //     { type: 'SET_CURRENT_USER'}
                    // );
                    // store.dispatch(
                        setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data(),
                        })
                    // );
                    // store.dispatch({
                    //     id: snapShot.id,
                    //     ...snapShot.data(),
                    // });
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
                <Route path="/signin" element={<SignInAndSignUpPage />} />
            </Routes>
        </div>
    );
}

// const unsubscribe = store.subscribe(() =>
//   console.log('State after dispatch: ', store.getState())
// )
// const mapDispatchToProps = dispatch => {
//     console.log(dispatch(setCurrentUser()))
//     return {setCurrentUser: user => dispatch(setCurrentUser(user))}
// };
// unsubscribe();

// export default connect(null, mapDispatchToProps)(App);
export default App;
