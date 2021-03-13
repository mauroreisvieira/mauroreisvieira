import MDXComponents from '@/components/MDXComponents';
import { getPost, getSortedPostsData, Mdx } from '@/lib/docs';
import { weekdayYearMonthDay } from '@/utils/date';
// @ts-ignore
import mdxPrism from 'mdx-prism';
import { GetStaticPropsResult } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
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
    postData: Mdx;
}

export const Slug: React.FC<DocProps> = ({
    postData,
}: DocProps & React.PropsWithChildren<DocProps>): React.ReactElement => {
    const { title, description, image, date, content, source, url } = postData;

    const [time, setTime] = useState<number>();
    const [width, setWidth] = useState<number>(0);

    const children = hydrate(source, {
        components: MDXComponents,
    });

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
        setTime(Math.ceil(count / 200));
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
                    url: `post/${url}`,
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
                <Markdown>{children}</Markdown>
            </Theme>
        </>
    );
};

export const getStaticProps = async ({
    params,
}: Params): Promise<GetStaticPropsResult<{ postData: Mdx }>> => {
    const { slug } = params;
    const { content, ...rest } = getPost(slug, true);

    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [
                // eslint-disable-next-line global-require
                require('remark-autolink-headings'),
                // eslint-disable-next-line global-require
                require('remark-slug'),
                // eslint-disable-next-line global-require
                require('remark-code-titles'),
            ],
            rehypePlugins: [mdxPrism],
        },
    });

    return {
        props: {
            postData: {
                source: mdxSource,
                url: slug,
                content,
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
