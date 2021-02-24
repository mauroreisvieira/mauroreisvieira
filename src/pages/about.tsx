import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => {
  const meta = {
    title: 'About | Next.js + TypeScript Example',
    description: 'About | Next.js + TypeScript Example',
  };

  return (
    <Layout meta={meta}>
      <h1>About</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/prism">Prism</Link>
    </Layout>
  );
};

export default About;
