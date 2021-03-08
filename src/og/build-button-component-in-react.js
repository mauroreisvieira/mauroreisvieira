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
                Build Button Component in <strong>React</strong>
            </H1>
        </Card>
    </Board>
);
