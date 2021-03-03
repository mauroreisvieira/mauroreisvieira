import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import React from 'react';
import '../css/tailwind.css';


function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
