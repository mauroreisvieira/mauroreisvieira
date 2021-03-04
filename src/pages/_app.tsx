import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';

import '../css/tailwind.css';
import '../css/prism.css';

const App = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
    </ThemeProvider>
);

export default App;
