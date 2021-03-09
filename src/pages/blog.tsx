import Anchor from '@/components/Anchor';
import Healine from '@/components/Healine';
import Header from '@/layout/Header';
import Nav from '@/layout/Nav';
import Theme from '@/layout/Theme';
import { getSortedPostsData, PostData } from '@/lib/docs';
import { weekdayYearMonthDay } from '@/utils/date';
import { GetStaticPropsResult } from 'next';
import Link from 'next/link';
import React from 'react';

interface BlogProps {
    postsData: PostData[];
}

export const Blog: React.FC<BlogProps> = ({ postsData }: BlogProps) => {
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
        postsData: PostData[];
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
