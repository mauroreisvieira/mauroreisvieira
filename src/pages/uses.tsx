import { DESIGN, DEVELOPMENT, HOSTING, PRODUCTIVITY, SETUP } from '@/api/uses';
import { Anchor } from '@/components/Anchor';
import { Healine } from '@/components/Healine';
import { Header } from '@/layout/Header';
import { Nav } from '@/layout/Nav';
import { Theme } from '@/layout/Theme';

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
