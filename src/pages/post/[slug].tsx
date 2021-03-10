import { getPost, getSortedPostsData, Post } from '@/lib/docs';
import markdownToHtml from '@/lib/markdown';
import { weekdayYearMonthDay } from '@/utils/date';
import { GetStaticPropsResult } from 'next';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const Progress = dynamic(() => import('@/components/Progress'));
const Healine = dynamic(() => import('@/components/Healine'));
const Markdown = dynamic(() => import('@/layout/Markdown'));
const Theme = dynamic(() => import('@/layout/Theme'));
const Nav = dynamic(() => import('@/layout/Nav'));
const Header = dynamic(() => import('@/layout/Header'));

interface Params {
    params: {
        slug: string;
    };
}

interface DocProps {
    postData: Post;
}

export const Slug: React.FC<DocProps> = ({
    postData,
}: DocProps & React.PropsWithChildren<DocProps>): React.ReactElement => {
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
                    <div className="mt-4 text-gray-500">
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
}: Params): Promise<GetStaticPropsResult<{ postData: Post }>> => {
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
