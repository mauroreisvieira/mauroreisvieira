import { getSortedPostsData, Post } from '@/lib/docs';
import { weekdayYearMonthDay } from '@/utils/date';
import { GetStaticPropsResult } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

const Anchor = dynamic(() => import('@/components/Anchor'));
const Healine = dynamic(() => import('@/components/Healine'));
const Theme = dynamic(() => import('@/layout/Theme'));
const Nav = dynamic(() => import('@/layout/Nav'));
const Header = dynamic(() => import('@/layout/Header'));

interface BlogProps {
    postsData: Post[];
}

export const Blog: React.FC<BlogProps> = ({
    postsData,
}: BlogProps): React.ReactElement => {
    const meta = {
        title: 'Blog | Mauro Reis Vieira',
        description: 'Blog | Mauro Reis Vieira',
    };

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Theme meta={meta}>
                <div className="dark:text-white">
                    <Healine className="mb-12">blog</Healine>
                    {postsData.map((post) => (
                        <div key={post.id} className="mb-8">
                            <div className="mb-16">
                                <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">
                                    {weekdayYearMonthDay(post.date)}
                                </p>
                                <Link href={`/post/${post.id}`} passHref>
                                    <Anchor className="mb-4 text-3xl font-black cursor-pointer underline">
                                        {post.title}
                                    </Anchor>
                                </Link>
                                <p className="mb-4">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Theme>
        </>
    );
};

export const getStaticProps = async (): Promise<
    GetStaticPropsResult<{
        postsData: Post[];
    }>
> => {
    const postsData = getSortedPostsData();
    return {
        props: {
            postsData,
        },
    };
};

export default Blog;
