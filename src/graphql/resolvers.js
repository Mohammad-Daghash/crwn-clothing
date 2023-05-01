import { gql } from '@apollo/client';

export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
    }
`;

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, { cache }) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN,
            });

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden },
            });

            cache.writeQuery({
                
            })

            return !cartHidden;
        },
    },
};
