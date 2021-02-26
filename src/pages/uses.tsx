import Layout from '../components/Layout';
import Header from '../components/Header';
import Nav from '../components/Nav';

import { DEVELOPMENT, SETUP, DESIGN } from '../api/uses';

const Uses = () => {
    const meta = {
        title: 'Uses | Mauro Reis Vieira',
        description: 'Uses | Mauro Reis Vieira',
    };

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Layout meta={meta}>
                <h1 className="font-black text-6xl lg:text-8xl dark:text-white mb-12">
                    cool things
                </h1>
                <div className="text-xl dark:text-white">
                    <p className="mb-16">
                        For my workday I use a bunch of tools, most parts of
                        that tools are open source.
                    </p>
                    <div className="mb-16">
                        <h2 className="font-bold text-3xl lg:text-5xl dark:text-white mb-5">
                            setup
                        </h2>
                        {SETUP.map((item) => (
                            <p key={item.name} className="mb-4 mr-4">
                                <a
                                    className="font-medium text-indigo-500 hover:text-indigo-600 cursor-pointer"
                                    href={item.link}
                                    rel="noreferrer"
                                >
                                    {item.name}
                                </a>
                                <span className="flex">{item.description}</span>
                            </p>
                        ))}
                    </div>

                    <div className="mb-16">
                        <h2 className="font-bold text-3xl lg:text-5xl dark:text-white mb-5">
                            development
                        </h2>
                        {DEVELOPMENT.map((item) => (
                            <p key={item.name} className="mb-4 mr-4">
                                <a
                                    className="font-medium text-indigo-500 hover:text-indigo-600 cursor-pointer"
                                    href={item.link}
                                    rel="noreferrer"
                                >
                                    {item.name}
                                </a>
                                <span className="flex">{item.description}</span>
                            </p>
                        ))}
                    </div>

                    <div className="mb-8">
                        <h2 className="font-bold text-3xl lg:text-5xl dark:text-white mb-5">
                            design
                        </h2>
                        {DESIGN.map((item) => (
                            <p key={item.name} className="mb-4 mr-4">
                                <a
                                    className="font-medium text-indigo-500 hover:text-indigo-600 cursor-pointer"
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
