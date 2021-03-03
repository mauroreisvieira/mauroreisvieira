interface Post {
    title: string;
    slug: string;
    date: Date;
    visible: boolean;
}

export const POSTS: Post[] = [
    {
        title: 'How to add Prettier and ESLint to your Next.js app',
        slug: 'what-s-new-in-javascript',
        date: new Date('10-10-2020'),
        visible: true,
    },
];
