import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL, {
    headers: {
        Authorization: `Basic ${Buffer.from(
            `${process.env.WORDPRESS_USER}:${process.env.WORDPRESS_PASSWORD}`
        ).toString('base64')}`,
    },
    cache: 'no-store'
});

export default client;