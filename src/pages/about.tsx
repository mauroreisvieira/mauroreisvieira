import Layout from '../components/Layout';
import Header from '../components/Header';
import Nav from '../components/Nav';

const About = () => {
    const meta = {
        title: 'About | Mauro Reis Vieira',
        description: 'About | Mauro Reis Vieira',
    };

    const experienceYears =
        new Date().getFullYear() - new Date('2014').getFullYear();

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Layout meta={meta}>
                <h1 className="font-black text-6xl lg:text-8xl dark:text-white mb-12">
                    about me
                </h1>
                <div className="text-2xl dark:text-white">
                    <p className="mb-4">
                        I'm Mauro Reis Vieira, a curious developer with a focus
                        on Front End Development from Leiria, Portugal.
                    </p>
                    <p className="mb-4">
                        For the past {experienceYears} years, I've always been
                        enjoying to experiment new technologies, working with
                        different people to solve companies issues &amp; people
                        needs.
                    </p>
                    <p className="mb-4">
                        I believe in open-source and collaboration over
                        competition, also I love sharing my knowledge and
                        experience with others.
                    </p>
                    <div className="mt-16">
                        <h2 className="font-bold text-3xl lg:text-5xl dark:text-white mb-5">
                            experience
                        </h2>
                        <p className="mb-4">
                            <strong>Front End Developer</strong> −{' '}
                            <a
                                className="text-indigo-500 hover:text-indigo-600"
                                href="https://www.namecheap.com/"
                                title="Namecheap"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Namecheap
                            </a>
                            <span className="flex items-center mt-2 text-base text-gray-400 dark:text-white">
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
                                October 2017 –{' '}
                                {new Date().toLocaleString('default', {
                                    month: 'long',
                                })}{' '}
                                {new Date().getFullYear()} (present)
                            </span>
                        </p>
                        <p className="mb-4">
                            <strong>Full Stack Developer</strong> −{' '}
                            <a
                                className="text-indigo-500 hover:text-indigo-600"
                                href="http://www.hi-interactive.pt/"
                                title="Hi INTERACTIVE"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Hi INTERACTIVE
                            </a>
                            <span className="flex items-center mt-2 text-base text-gray-400 dark:text-white">
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
                                May 2016 – October 2017
                            </span>
                        </p>
                        <p className="mb-4">
                            <strong>Web Developer</strong> −{' '}
                            <a
                                className="text-indigo-500 hover:text-indigo-600"
                                href="https://www.wayacross.pt/"
                                title="WayAcross"
                                target="_blank"
                                rel="noreferrer"
                            >
                                WayAcross
                            </a>
                            <span className="flex items-center mt-2 text-base text-gray-400 dark:text-white">
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
                                April 2014 – May 2016
                            </span>
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;
