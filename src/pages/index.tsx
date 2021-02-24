import Link from 'next/link';
import Layout from '../components/Layout';

const Page = () => {
  const meta = {
    title: 'Home | Next.js + TypeScript Example',
    description: 'Home | Next.js + TypeScript Example',
  };

  return (
    <Layout meta={meta}>
      <div className="mt-12 lg:grid lg:grid-cols-3 gap-12">
        <div>
          <h1 className="tracking-tight font-black xl:text-5xl lg:text-4xl md:text-5xl text-4xl dark:text-white">
            Hey
          </h1>
        </div>
      </div>
      <div className="col-span-2">
        <h2 className="font-bold mb-8 tracking-tight text-2xl text-black dark:text-white">
          Latest posts
        </h2>
        <div className="md:grid md:grid-cols-2 gap-x-8 gap-y-12">
          <div className="mb-8 xl:mb-0 lg:mb-0 md:mb-0">
            <Link href="/blog/how-i-work">How I Work</Link>
          </div>
          <div className="mb-8 xl:mb-0 lg:mb-0 md:mb-0">
            <Link href="/blog/speech-synthesis-api">Speech synthesis API</Link>
          </div>
          <div className="mb-8 xl:mb-0 lg:mb-0 md:mb-0">
            <Link href="/blog/what-s-new-in-javascript">
              What's new in javascript
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
