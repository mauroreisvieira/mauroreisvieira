import Anchor from '@/components/Anchor';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Healine = dynamic(() => import('@/components/Healine'));
const Theme = dynamic(() => import('@/layout/Theme'));
const Nav = dynamic(() => import('@/layout/Nav'));
const Header = dynamic(() => import('@/layout/Header'));
const Social = dynamic(() => import('@/layout/Social'));

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
                            <Link href="/about" passHref>
                                <Anchor>about me</Anchor>
                            </Link>{' '}
                            or you can check what{' '}
                            <Link href="/uses" passHref>
                                <Anchor>awesome things</Anchor>
                            </Link>{' '}
                            I use on my normal workday.
                        </p>
                        <p className="mb-12">
                            Also I sharing everything I know in my{' '}
                            <Link href="/blog" passHref>
                                <Anchor>blog</Anchor>
                            </Link>
                            .
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
