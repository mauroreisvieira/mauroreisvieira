import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Progress } from '../../components';
import { Theme, Header, Nav, Markdown } from '../../layout';
import { getAllDocs, getDocBySlug } from '../../../lib/docs';
import markdownToHtml from '../../../lib/markdown';

interface DocProps {
    meta: React.ComponentProps<typeof Theme>['meta'];
    content: string;
}

export const Doc: React.FC<DocProps> = ({
    meta,
    content,
}: DocProps & React.PropsWithChildren<DocProps>) => {
    const markdownRef = useRef();
    const timeout = useRef(0);
    const [width, setWidth] = useState<number>(0);

    const updateScrollProgress = useCallback((): void => {
        if (!markdownRef.current) return;
        const winTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetBottom =
            markdownRef.current.offsetTop + markdownRef.current.scrollHeight;
        const windowBottom = winTop + window.outerHeight;
        setWidth(
            100 -
                ((targetBottom - windowBottom + window.outerHeight / 3) /
                    (targetBottom -
                        window.outerHeight +
                        window.outerHeight / 3)) *
                    100
        );
    }, []);

    const handleScroll = useCallback(() => {
        if (timeout.current) {
            window.cancelAnimationFrame(timeout.current);
        }

        timeout.current = window.requestAnimationFrame(() => {
            updateScrollProgress();
        });
    }, [updateScrollProgress]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [handleScroll, updateScrollProgress]);

    return (
        <div>
            <Progress style={{ width: `${width}%` }} />
            <Header>
                <Nav />
            </Header>
            <Theme meta={meta}>
                <div className="mb-16 text-center mx-auto">
                    <h1 className="font-black text-6xl lg:text-8xl dark:text-white mb-12">
                        {meta.title}
                    </h1>
                    {meta.date && (
                        <div className="mt-4 text-gray-500 dark:text-gray-400">
                            {new Date(meta.date)
                                .toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })
                                .toString()}{' '}
                            by {meta.author}
                        </div>
                    )}
                </div>
                <Markdown ref={markdownRef} content={{ __html: content }} />
            </Theme>
        </div>
    );
};

type StaticProps = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: StaticProps) {
    const { slug } = params;
    const doc = getDocBySlug(slug);
    const content = await markdownToHtml(doc.content || '');

    return {
        props: {
            ...doc,
            content,
        },
    };
}

export async function getStaticPaths() {
    const docs = getAllDocs();
    return {
        paths: docs.map((doc) => ({
            params: {
                slug: doc.slug,
            },
        })),
        fallback: true,
    };
}

export default Doc;
