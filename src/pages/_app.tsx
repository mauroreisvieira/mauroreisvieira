import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';
import '../css/prism.css';
import '../css/tailwind.css';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
    <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
    </ThemeProvider>
);

export default App;
