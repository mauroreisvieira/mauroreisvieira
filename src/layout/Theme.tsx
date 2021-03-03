import classNames from 'classnames';
import Head from 'next/head';
import React from 'react';

type Meta = {
    title: string;
    description: string;
    cardImage?: string;
    author?: string;
    date?: Date;
};

interface ThemeProps {
    meta: Meta;
    className?: string;
}

export const Theme: React.FC<ThemeProps> = ({
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
            <meta name="robots" content="follow, index" />
            <link href="/favicon.ico" rel="shortcut icon" />
            <meta content={meta.description} name="description" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.cardImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@vercel" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.cardImage} />
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
