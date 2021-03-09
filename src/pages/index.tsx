import Anchor from '@/components/Anchor';
import Healine from '@/components/Healine';
import Header from '@/layout/Header';
import Nav from '@/layout/Nav';
import Social from '@/layout/Social';
import Theme from '@/layout/Theme';
import Link from 'next/link';

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
                    <Healine className="mb-12">hey folks!</Healine>
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
                            Also I sharing everything I know in my{' '}
                            <Link href="/blog">
                                <Anchor>blog</Anchor>
                            </Link>{' '}.
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
