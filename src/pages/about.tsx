import { ABOUT } from '@/api/about';
import { monthYear } from '@/utils/date';
import dynamic from 'next/dynamic';
import React from 'react';

const Anchor = dynamic(() => import('@/components/Anchor'));
const Healine = dynamic(() => import('@/components/Healine'));
const Theme = dynamic(() => import('@/layout/Theme'));
const Nav = dynamic(() => import('@/layout/Nav'));
const Header = dynamic(() => import('@/layout/Header'));

const About = (): React.ReactElement => {
    const meta = {
        title: 'About Me | Mauro Reis Vieira',
        description: 'About Me | Mauro Reis Vieira',
        url: 'about/',
    };

    const { profile, employment } = ABOUT;

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Theme meta={meta}>
                <Healine className="mb-12">about me</Healine>
                <div className="text-2xl dark:text-white">
                    {profile.summary.map((summary) => (
                        <p key={summary.id} className="mb-6">
                            {summary.detail}
                        </p>
                    ))}

                    <div className="mt-16">
                        <Healine type="h2" className="mb-6">
                            experience
                        </Healine>
                        {employment.map((employ) => (
                            <p className="mb-6" key={employ.job}>
                                <strong>{employ.job}</strong> −{' '}
                                <Anchor
                                    href={employ.link}
                                    rel="noopener noreferrer"
                                    title={employ.employer}
                                    target="_blank"
                                >
                                    {employ.employer}
                                </Anchor>
                                <span className="flex items-center text-base text-gray-500">
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    {monthYear(employ.start)} －{' '}
                                    {employ.end === 'present'
                                        ? 'present'
                                        : monthYear(employ.end)}
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
            </Theme>
        </>
    );
};

export default About;
