import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
    ApolloProvider,
    createHttpLink,
    ApolloClient,
} from '@apollo/client';
import { cache } from './graphql/cache';
import { Elements } from '@stripe/react-stripe-js';
import store, { persistor } from './redux/store';
import { stripePromise } from './utils/stripe/stripe.utils';

import './index.css';
import App from './App';

const httpLink = createHttpLink({
    uri: 'https://crwn-clothing.com/',
});

const client = new ApolloClient({
    link: httpLink,
    cache,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <Elements stripe={stripePromise}>
                        <App />
                    </Elements>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
);
