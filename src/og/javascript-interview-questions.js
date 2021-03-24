import React from 'react';
import { Board, Card, H1, Logo } from './components';
import JavascriptLogo from './logos/javascript.js';

export default () => (
    <Board>
        <Logo>
            <JavascriptLogo />
        </Logo>
        <Card style={{ width: '70%', textAlign: 'center' }}>
            <H1>JavaScript Interview Questions</H1>
        </Card>
    </Board>
);
