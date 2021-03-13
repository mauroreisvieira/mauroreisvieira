import classNames from 'classnames';
import Head from 'next/head';
import React from 'react';

interface Meta {
    title: string;
    description: string;
    url: string;
    image?: string;
    date?: string;
    author?: string;
}

interface ThemeProps {
    meta: Meta;
    className?: string;
}

const Theme: React.FC<ThemeProps> = ({
    meta,
    className,
    children,
}: ThemeProps & React.PropsWithChildren<ThemeProps>): React.ReactElement => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>{meta.title}</title>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mauroreisvieira" />
            <meta property="og:site_name" content="Mauro Reis Vieira" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={meta.title} />
            <meta property="og:locale" content="en" />
            <meta property="og:url" content={`https://mauroreisvieira.com/${meta.url}`} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />
            <meta content={meta.description} name="description" />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <link rel="canonical" href={`https://mauroreisvieira.com/${meta.url}`} />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="robots" content="follow, index" />
            <link
                rel="icon"
                sizes="192x192"
                href="https://mauroreisvieira.com/static/touch/chrome-touch-icon-192x192.png"
            />
        </Head>
        <div
            className={classNames(
                'max-w-screen-lg mx-auto pt-4 px-4 pg:pt-8 lg:px-8 pb-24 mt-14',
                className
            )}
        >
            {children}
        </div>
    </>
);

export default Theme;
