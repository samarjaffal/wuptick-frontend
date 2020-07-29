import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { App } from './App';
import { getAccessToken } from './shared/GetAccessToken';

const client = new ApolloClient({
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
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app')
);
