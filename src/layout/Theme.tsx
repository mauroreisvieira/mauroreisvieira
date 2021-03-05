import classNames from 'classnames';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

interface Meta {
    title: string;
    description: string;
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
            <title>{meta.title}</title>
            <meta charSet="utf-8" />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta content={meta.description} name="description" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Mauro Reis Vieira" />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mauroreisvieira" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="theme-color" content="#000000" />
            <meta name="robots" content="follow, index" />
            <link href="/favicon.ico" rel="shortcut icon" />
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
