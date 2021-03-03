import Link from 'next/link';
import { ABOUT } from '../api';
import { Anchor } from '../components';
import { Header, Nav, Theme } from '../layout';

const About = () => {
    const meta = {
        title: 'About Me | Mauro Reis Vieira',
        description: 'About Me | Mauro Reis Vieira',
    };

    const { profile } = ABOUT;

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Theme meta={meta}>
                <h1 className="font-black text-6xl lg:text-8xl dark:text-white mb-12">
                    about me
                </h1>
                <div className="text-2xl dark:text-white">
                    {profile.summary.map((summary) => (
                        <p key={summary.id} className="mb-6">
                            {summary.detail}
                        </p>
                    ))}
                    <div>
                        <p>
                            If you want to know more details about me, I invite
                            you to see my{' '}
                            <Link href="/curriculum">
                                <Anchor>curriculum</Anchor>
                            </Link>
                            , there you can find all my academic and
                            professional background.
                        </p>
                    </div>
                </div>
            </Theme>
        </>
    );
};

export default About;
