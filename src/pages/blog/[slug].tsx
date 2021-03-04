import { GetStaticPropsResult } from 'next';
import React, { useEffect, useState } from 'react';
import { Header } from '@/layout/Header';
import { Nav } from '@/layout/Nav';
import { Theme } from '@/layout/Theme';
import { Markdown } from '@/layout/Markdown';
import { getPost, getSortedPostsData, PostData } from '@/lib/docs';
import markdownToHtml from '@/lib/markdown';

interface Params {
    params: {
        slug: string;
    };
}

interface DocProps {
    postData: PostData;
}

export const Slug: React.FC<DocProps> = ({
    postData,
}: DocProps & React.PropsWithChildren<DocProps>) => {
    const { title, description, date, content } = postData;
    const [time, setTime] = useState<number>();

    useEffect(() => {
        const count = content.match(/\w+/g)?.length || 0;
        setTime(Math.ceil(count / 250));
    }, [content]);

    return (
        <div>
            <Header>
                <Nav />
            </Header>
            <Theme
                meta={{
                    title,
                    description,
                }}
            >
                <div className="mb-16 text-center mx-auto">
                    <h1 className="font-black text-6xl lg:text-8xl dark:text-white mb-12">
                        {title}
                    </h1>
                    <div className="mt-4 text-gray-500 dark:text-gray-400">
                        {date &&
                            new Date(date)
                                .toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })
                                .toString()}{' － '}
                            <span>{time} min read</span>
                    </div>
                </div>
                <Markdown content={{ __html: content }} />
            </Theme>
        </div>
    );
};

export const getStaticProps = async ({
    params,
}: Params): Promise<GetStaticPropsResult<{ postData: PostData }>> => {
    const { slug } = params;
    const { content, ...rest } = getPost(slug, true);
    const markdown = await markdownToHtml(content || '');
    return {
        props: {
            postData: {
                content: markdown,
                ...rest,
            },
        },
    };
};
export const getStaticPaths = async () => {
    const paths = getSortedPostsData().map(({ id }) => ({
        params: {
            slug: id,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export default Slug;
