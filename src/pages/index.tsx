import Link from 'next/link';
import Layout from '../components/Layout';

const Page = () => {
  const meta = {
    title: 'Home | Next.js + TypeScript Example',
    description: 'Home | Next.js + TypeScript Example',
  };

  return (
    <Layout meta={meta}>
      <h1>Home</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/prism">Prism</Link>
    </Layout>
  );
};

export default Page;
