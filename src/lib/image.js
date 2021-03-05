import React from 'react';

export const Board = ({ children, ...otherProps }) => (
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: 2048,
            height: 1170,
            backgroundColor: '#fff',
            backgroundSize: '80px 80px',
            backgroundImage:
                'radial-gradient(circle at 50% 50%, #f0f0f0, #f0f0f0 3px, transparent 3px), radial-gradient(circle at 0 0, #f0f0f0, #f0f0f0 3px, transparent 3px), radial-gradient(circle at 0 100%, #f0f0f0, #f0f0f0 3px, transparent 3px), radial-gradient(circle at 100% 0, #f0f0f0, #f0f0f0 3px, transparent 3px), radial-gradient(circle at 100% 100%, #f0f0f0, #f0f0f0 3px, transparent 3px)',
            color: '#000',
            ...otherProps.style,
        }}
    >
        {children}
    </div>
);

export const Card = ({ children, ...otherProps }) => (
    <div {...otherProps}>{children}</div>
);

export const Logo = ({ children }) => (
    <div style={{ width: 300, marginBottom: 60, textAlign: 'center' }}>
        {children}
    </div>
);

export const H1 = ({ children, ...otherProps }) => (
    <h1
        style={{
            fontFamily:
                'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji',
            fontSize: 115,
            fontWeight: 400,
            ...otherProps.style,
        }}
    >
        {children}
    </h1>
);
