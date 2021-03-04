import { Header } from '@/layout/Header';
import { Nav } from '@/layout/Nav';
import { Theme } from '@/layout/Theme';
import { Anchor } from '@/components/Anchor';
import { getSortedPostsData, PostData } from '@/lib/docs';
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
                    <h1 className="font-black text-6xl lg:text-8xl dark:text-white mb-12">
                        blog
                    </h1>
                    {postsData.map((post) => (
                        <div key={post.id} className="mb-8">
                            <div className="mb-16">
                                <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">
                                    {new Date(post.date).toLocaleDateString(
                                        'en-US',
                                        {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        }
                                    )}
                                </p>
                                <Link href={`/posts/${post.id}`}>
                                    <Anchor className="mb-4 text-3xl font-black cursor-pointer underline">
                                        {post.title}
                                    </Anchor>
                                </Link>
                                <p className="mb-4">
                                    {post.description}
                                </p>
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
