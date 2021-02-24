import Link from 'next/link';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Header from '../components/Header';

const Page = () => {
    const meta = {
        title: 'Home | Next.js + TypeScript Example',
        description: 'Home | Next.js + TypeScript Example',
    };

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Layout meta={meta}>
                <div className="lg:grid lg:grid-cols-2 gap-12">
                    <div>
                        <h1 className="tracking-tight font-black text-8xl dark:text-white mb-12">
                            Hey folks!
                        </h1>
                        <div className="text-2xl">
                            <p className="mb-6">
                                I am{' '}
                                <a href="http://www.twitter.com/mauroreisivieira">
                                    @mauroreisivieira
                                </a>
                                , an Front End Developer with focus on React.
                            </p>
                            <p>
                                I believe in collaboration over competition, you
                                can check my open-source projects on{' '}
                                <a href="https://www.github.com/mauroreisivieira">
                                    GitHub
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Page;
