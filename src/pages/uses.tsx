import Layout from '../components/Layout';
import Header from '../components/Header';
import Nav from '../components/Nav';

import { DEVELOPMENT } from '../api/uses';

const Uses = () => {
    const meta = {
        title: 'Uses | Next.js + TypeScript Example',
        description: 'Uses | Next.js + TypeScript Example',
    };

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Layout meta={meta}>
                <h1 className="font-black text-7xl dark:text-white mb-12">
                    cool things
                </h1>
                <div className="dark:text-white">
                    <p className="mb-4 text-xl">
                        For my workday I use a bunch of tools, most parts of
                        that tools are open source.
                    </p>
                    <div className="">
                        <h2 className="text-3xl mt-12 mb-4">Development</h2>
                        {DEVELOPMENT.map((item) => (
                            <p key={item.name} className="mb-4 mr-4">
                                <a
                                    className="font-medium text-xl text-indigo-500 hover:text-indigo-600 cursor-pointer"
                                    href={item.link}
                                    rel="noreferrer"
                                >
                                    {item.name}
                                </a>
                                <span className="flex">{item.description}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
};
export default Uses;
