import React from 'react';
import { Info } from '../../components/Info/index';
import { ListContainer } from '../../components/ListContainer/index';

export const Home = () => {
    return (
        <div
            style={{
                paddingTop: '48px',
                marginLeft: '1em',
                marginRight: '1em',
            }}
        >
            <h1>Home</h1>
            <ListContainer title="Recent Projects" icon="star">
                <Info />
                <Info />
                <Info />
            </ListContainer>
        </div>
    );
};
