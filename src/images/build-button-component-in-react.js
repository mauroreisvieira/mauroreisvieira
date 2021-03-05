import React from 'react';

import { Board, Card, Logo, H1 } from '../lib/image';

export default () => (
    <Board>
        <Logo>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.232 23 20.463"
            >
                <defs />
                <circle r="2.05" fill="#61dafb" />
                <g fill="none" stroke="#61dafb">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        </Logo>
        <Card style={{ width: '70%', textAlign: 'center' }}>
            <H1>
                Build Button Component in <strong>React</strong>
            </H1>
        </Card>
    </Board>
);
