import { Anchor } from '../components';
import { Header, Nav, Theme } from '../layout';

import { DEVELOPMENT, SETUP, DESIGN } from '../api';

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
            <Theme meta={meta}>
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
                                <Anchor
                                    href={item.link}
                                    rel="noreferrer"
                                    className="font-medium"
                                    title={item.name}
                                    target="_blank"
                                >
                                    {item.name}
                                </Anchor>
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
                                <Anchor
                                    href={item.link}
                                    rel="noreferrer"
                                    className="font-medium"
                                    title={item.name}
                                    target="_blank"
                                >
                                    {item.name}
                                </Anchor>
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
                                <Anchor
                                    href={item.link}
                                    rel="noreferrer"
                                    className="font-medium"
                                    title={item.name}
                                    target="_blank"
                                >
                                    {item.name}
                                </Anchor>
                                <span className="flex">{item.description}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </Theme>
        </>
    );
};
export default Uses;
