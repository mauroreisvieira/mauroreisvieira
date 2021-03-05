import { Healine } from '@/components/Healine';
import { Progress } from '@/components/Progress';
import { Header } from '@/layout/Header';
import { Markdown } from '@/layout/Markdown';
import { Nav } from '@/layout/Nav';
import { Theme } from '@/layout/Theme';
import { getPost, getSortedPostsData, PostData } from '@/lib/docs';
import markdownToHtml from '@/lib/markdown';
import { weekdayYearMonthDay } from '@/utils/date';
import { GetStaticPropsResult } from 'next';
import React, { useEffect, useState } from 'react';

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
    const { title, description, image, date, content } = postData;
    const [time, setTime] = useState<number>();
    const [width, setWidth] = useState<number>(0);

    const scrolling = (): void => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setWidth(height > 0 ? scrolled / 100 : 0);
    };

    useEffect(() => {
        const count = content.match(/\w+/g)?.length || 0;
        setTime(Math.ceil(count / 250));
    }, [content]);

    useEffect(() => {
        window.addEventListener('scroll', scrolling);

        return (): void => {
            window.removeEventListener('scroll', scrolling);
        };
    }, []);

    return (
        <>
            <Progress
                className="h-1"
                style={{
                    transform: `scaleX(${width})`,
                    transformOrigin: 'left top',
                }}
            />
            <Header>
                <Nav />
            </Header>
            <Theme
                meta={{
                    title,
                    description,
                    image,
                }}
            >
                <div className="mb-16 text-center mx-auto">
                    <Healine className="mb-12">{title}</Healine>
                    <div className="mt-4 text-gray-500 dark:text-gray-400">
                        {date && weekdayYearMonthDay(date)}
                        {' － '}
                        <span>{time} min read</span>
                    </div>
                </div>
                <Markdown content={{ __html: content }} />
            </Theme>
        </>
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
