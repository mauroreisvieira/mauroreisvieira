import Link from 'next/link';
import { Anchor } from '@/components/Anchor';
import { Header } from '@/layout/Header';
import { Nav } from '@/layout/Nav';
import { Theme } from '@/layout/Theme';
import { Social } from '@/layout/Social';

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
                <div className="text-3xl dark:text-white">
                    <h1 className="font-black text-6xl lg:text-8xl dark:text-white mb-12">
                        hey folks!
                    </h1>
                    <div>
                        <p className="mb-8">
                            I'm a Front End Developer from Portugal.
                        </p>
                        <p className="mb-8">
                            You can read more{' '}
                            <Link href="/about">
                                <Anchor>about me</Anchor>
                            </Link>{' '}
                            or you can check what{' '}
                            <Link href="/uses">
                                <Anchor>awesome things</Anchor>
                            </Link>{' '}
                            I use on my normal workday.
                        </p>
                        <p className="mb-12">
                            If you are interested to know more about me you can
                            also follow me.
                        </p>
                        <Social />
                    </div>
                </div>
            </Theme>
        </>
    );
};
export default Page;
