import React from 'react';
import { Board, Card, H1, Logo } from './components';
import ViteLogo from './logos/vitejs.js';

export default () => (
    <Board>
        <Logo>
            <ViteLogo />
        </Logo>
        <Card style={{ width: '70%', textAlign: 'center' }}>
            <H1>Vite + React + TailwindCSS</H1>
        </Card>
    </Board>
);
