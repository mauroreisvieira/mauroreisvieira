import React from 'react';
import { Board, Card, H1, Logo } from './components';

import SublimeTextLogo from './logos/sublime-text.js';

export default () => (
    <Board>
        <Logo>
            <SublimeTextLogo />
        </Logo>
        <Card style={{ width: '70%', textAlign: 'center' }}>
            <H1>
                Sublime Text 3 Tips
            </H1>
        </Card>
    </Board>
);
