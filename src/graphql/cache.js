import { InMemoryCache, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                cartHidden: {
                    read() {
                        return toggleCartHiddenVar();
                    },
                },
            },
        },
    },
});

export const toggleCartHiddenVar = makeVar(false);
