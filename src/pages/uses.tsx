import { DESIGN, DEVELOPMENT, HOSTING, PRODUCTIVITY, SETUP } from '@/api/uses';
import dynamic from 'next/dynamic';
import React from 'react';

const Anchor = dynamic(() => import('@/components/Anchor'));
const Healine = dynamic(() => import('@/components/Healine'));
const Theme = dynamic(() => import('@/layout/Theme'));
const Nav = dynamic(() => import('@/layout/Nav'));
const Header = dynamic(() => import('@/layout/Header'));

const Uses = (): React.ReactElement => {
    const meta = {
        title: 'Uses | Mauro Reis Vieira',
        description: 'Uses | Mauro Reis Vieira',
        url: 'uses/',
    };

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Theme meta={meta}>
                <Healine className="mb-12">awesome things</Healine>
                <div className="text-xl dark:text-white">
                    <p className="mb-16">
                        Here they are, the tools I use for my workday.
                    </p>
                    <div className="mb-16">
                        <Healine type="h2" className="mb-5">
                            setup
                        </Healine>
                        {SETUP.map((item) => (
                            <p key={item.name} className="mb-4 mr-4">
                                <Anchor
                                    href={item.link}
                                    rel="noopener noreferrer"
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
                        <Healine type="h2" className="mb-5">
                            development
                        </Healine>
                        {DEVELOPMENT.map((item) => (
                            <p key={item.name} className="mb-4 mr-4">
                                <Anchor
                                    href={item.link}
                                    rel="noopener noreferrer"
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
                        <Healine type="h2" className="mb-5">
                            design
                        </Healine>
                        {DESIGN.map((item) => (
                            <p key={item.name} className="mb-4 mr-4">
                                <Anchor
                                    href={item.link}
                                    rel="noopener noreferrer"
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
                        <Healine type="h2" className="mb-5">
                            productivity
                        </Healine>
                        {PRODUCTIVITY.map((item) => (
                            <p key={item.name} className="mb-4 mr-4">
                                <Anchor
                                    href={item.link}
                                    rel="noopener noreferrer"
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
                        <Healine type="h2" className="mb-5">
                            hosting
                        </Healine>
                        {HOSTING.map((item) => (
                            <p key={item.name} className="mb-4 mr-4">
                                <Anchor
                                    href={item.link}
                                    rel="noopener noreferrer"
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
