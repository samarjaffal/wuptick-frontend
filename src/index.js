import React from 'react';
import ReactDOM from 'react-dom';
/* import ApolloClient from 'apollo-boost'; */
import { ApolloProvider } from 'react-apollo';
import { App } from './App';
import { getAccessToken, setAccessToken } from './shared/GetAccessToken';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import jwtDecode from 'jwt-decode';

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
        __schema: {
            types: [],
        },
    },
});
const cache = new InMemoryCache({ fragmentMatcher });

const requestLink = new ApolloLink(
    (operation, forward) =>
        new Observable((observer) => {
            let handle;
            Promise.resolve(operation)
                .then((operation) => {
                    const accessToken = getAccessToken();
                    console.log(operation, 'accessToken');
                    if (accessToken) {
                        operation.setContext({
                            headers: {
                                authorization: `bearer ${accessToken}`,
                            },
                        });
                    }
                })
                .then(() => {
                    handle = forward(operation).subscribe({
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer),
                    });
                })
                .catch(observer.error.bind(observer));

            return () => {
                if (handle) handle.unsubscribe();
            };
        })
);

const client = new ApolloClient({
    link: ApolloLink.from([
        new TokenRefreshLink({
            accessTokenField: 'token',
            isTokenValidOrUndefined: () => {
                const token = getAccessToken();
                if (!token) {
                    return true;
                }
                try {
                    const { exp } = jwtDecode(token);
                    const valid = Date.now() >= exp * 1000 ? false : true;
                    return valid;
                } catch (error) {
                    return false;
                }
            },
            fetchAccessToken: () => {
                return fetch('http://localhost:27017/refresh_token', {
                    method: 'POST',
                    credentials: 'include',
                });
            },
            handleFetch: (accessToken) => {
                setAccessToken(accessToken);
            },
            /*             handleResponse: (operation, accessTokenField) => (response) => {
                // here you can parse response, handle errors, prepare returned token to
                // further operations
                // returned object should be like this:
                // {
                //    access_token: 'token string here'
                // }
            }, */
            handleError: (err) => {
                console.warn('Your refresh token is invalid. Try to relogin');
                console.error(err);
            },
        }),

        onError(({ graphQLErrors, networkError }) => {
            console.log(graphQLErrors);
            console.log(networkError);
        }),
        requestLink,
        new HttpLink({
            uri: 'http://localhost:27017/graphql',
            credentials: 'include',
        }),
    ]),
    cache,
});

/* const client = new ApolloClient({
    uri: 'http://localhost:27017/graphql',
    credentials: 'include',
    request: (operation) => {
        const accessToken = getAccessToken();
        console.log(accessToken, 'accessToken');
        if (accessToken) {
            operation.setContext({
                headers: {
                    authorization: `bearer ${accessToken}`,
                },
            });
        }
    },
}); */

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app')
);
