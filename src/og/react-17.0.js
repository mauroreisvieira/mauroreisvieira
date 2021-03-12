import React from 'react';
import { Board, Card, H1, Logo } from './components';
import ReactLogo from './logos/reactjs.js';

export default () => (
    <Board>
        <Logo>
            <ReactLogo />
        </Logo>
        <Card style={{ width: '70%', textAlign: 'center' }}>
            <H1>
                React <strong>v17.0</strong>
            </H1>
        </Card>
    </Board>
);
