import Link from 'next/link';
import { Anchor } from '../components';
import { Header, Nav, Theme } from '../layout';

const Page = () => {
    const meta = {
        title: 'Mauro Reis Vieira',
        description: 'Mauro Reis Vieira',
    };
    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Theme meta={meta}>
                <div>
                    <h1 className="font-black text-6xl lg:text-8xl dark:text-white mb-12">
                        hey folks!
                    </h1>
                    <div>
                        <p className="text-3xl dark:text-white mb-8">
                            I'm a Front End Developer from Portugal.
                        </p>
                        <p className="text-3xl dark:text-white">
                            You can read more{' '}
                            <Link href="/about">
                                <Anchor>
                                    about me
                                </Anchor>
                            </Link>{' '}
                            or you can check what{' '}
                            <Link href="/uses">
                                <Anchor>
                                    cool things
                                </Anchor>
                            </Link>{' '}
                            I use on my normal workday.
                        </p>
                    </div>
                </div>
            </Theme>
        </>
    );
};
export default Page;
