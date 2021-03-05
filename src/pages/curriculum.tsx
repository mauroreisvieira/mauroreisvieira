import { Anchor } from '@/components/Anchor';
import { Header } from '@/layout/Header';
import { Nav } from '@/layout/Nav';
import { Healine } from '@/components/Healine';
import { Theme } from '@/layout/Theme';
import classNames from 'classnames';
import { ABOUT } from '../api';

const Curriculum = () => {
    const meta = {
        title: 'Curriculum | Mauro Reis Vieira',
        description: 'Curriculum | Mauro Reis Vieira',
    };

    const {
        details,
        profile,
        employment,
        education,
        skills,
        languages,
        hobbies,
        life,
    } = ABOUT;

    const formatDate = (date: Date) =>
        `${new Date(date).toLocaleString('default', {
            month: 'long',
        })} ${new Date(date).getFullYear()}`;

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <Theme meta={meta} className="-mt-1">
                <div className="flex items-center mb-6">
                    <div className="inline-block rounded-full p-1 border-2 border-brand mr-4">
                        <img
                            alt={details.firstName}
                            className="inline-block h-20 w-20 rounded-full ring-2 ring-white dark:ring-black"
                            src="https://pbs.twimg.com/profile_images/1263229362020798466/0LaZ4rGq_400x400.jpg"
                        />
                    </div>
                    <div>
                        <Healine type="h2" className="text-3xl">
                            {details.firstName} {details.lastName}
                        </Healine>
                        <p className="font-medium text-1xl text-brand">
                            {details.job}
                        </p>
                    </div>
                </div>
                <div className="dark:text-white print:text-sm">
                    <div className="flex mb-8">
                        <div className="flex-1">
                            <div className="mb-2 grid grid-cols-2">
                                <div>
                                    <p className="uppercase font-medium mb-2">
                                        Address
                                    </p>
                                </div>
                                <div>
                                    <p>{details.address}</p>
                                    <p>
                                        {details.city}, {details.zip}
                                    </p>
                                    <p>{details.country}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="uppercase font-medium mb-2">
                                    Nationality
                                </p>
                                <p>{details.nationality}</p>
                            </div>
                        </div>
                        <div className="flex-1 pl-8">
                            <div className="grid grid-cols-2">
                                <p className="uppercase font-medium mb-2">
                                    Email
                                </p>
                                <Anchor
                                    href={`mailto:${details.email}?subject=Hey! I saw your curriculum.`}
                                >
                                    {details.email}
                                </Anchor>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="uppercase font-medium mb-2">
                                    Phone
                                </p>
                                <p>{details.phone}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="uppercase font-medium mb-2">
                                    Driving License
                                </p>
                                <p>{details.license}</p>
                            </div>
                            <div className="mb-2 grid grid-cols-2">
                                <p className="uppercase font-medium mb-2">
                                    Birth Date
                                </p>
                                <p>
                                    {new Date(details.dateOfBirh)
                                        .toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })
                                        .toString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 grid grid-cols-3 gap-8">
                        <div>
                            <Healine type="h3" className="mb-4">
                                Profile
                            </Healine>
                        </div>
                        <div className="col-span-2 -mb-4">
                            {profile.summary.map((summary) => (
                                <p key={summary.id} className="mb-2">
                                    {summary.detail}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="border-t pt-4">
                        <Healine type="h3" className="mb-4">
                            Employment History
                        </Healine>
                        {employment.map((employ, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                className="mb-2 grid grid-cols-3 gap-8"
                            >
                                <div>
                                    <p>
                                        {formatDate(employ.start)} －{' '}
                                        {employ.end === 'present'
                                            ? 'present'
                                            : formatDate(employ.end)}
                                    </p>
                                    <p className="uppercase text-gray-500">
                                        {employ.city}
                                    </p>
                                </div>
                                <div className="col-span-2">
                                    <div className="mb-4">
                                        <p className="text-xl font-normal">
                                            {employ.job}
                                        </p>
                                        <p className="mb-4">
                                            <Anchor
                                                href={employ.link}
                                                target="_blank"
                                                rel="nofollow"
                                                title={employ.employer}
                                            >
                                                {employ.employer}
                                            </Anchor>
                                        </p>
                                        <ul className="list-disc list-inside">
                                            {employ.description.map(
                                                (description) => (
                                                    <li key={description.id}>
                                                        {description.detail}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4 border-t pt-4 print:border-none">
                        <Healine type="h3" className="mb-4">
                            Education
                        </Healine>
                        {education.map((educ, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                className="mb-2 grid grid-cols-3 gap-8"
                            >
                                <div>
                                    <p>
                                        {formatDate(educ.start)} －{' '}
                                        {educ.end === 'present'
                                            ? 'present'
                                            : formatDate(educ.end)}
                                    </p>
                                    <p className="uppercase text-gray-500">
                                        {educ.city}
                                    </p>
                                </div>
                                <div className="col-span-2">
                                    <div className="mb-4">
                                        <p className="text-xl font-normal">
                                            {educ.degree}
                                        </p>
                                        <p className="mb-4">
                                            <Anchor
                                                href={educ.link}
                                                target="_blank"
                                                rel="nofollow"
                                                title={educ.school}
                                            >
                                                {educ.school}
                                            </Anchor>
                                        </p>
                                        <div>
                                            {educ.note && (
                                                <p className="italic">
                                                    <strong>Note: </strong>
                                                    {educ.note}
                                                </p>
                                            )}
                                            {educ.description && (
                                                <ul className="list-disc list-inside">
                                                    {educ.description.map(
                                                        (description) => (
                                                            <li
                                                                key={
                                                                    description.id
                                                                }
                                                            >
                                                                {
                                                                    description.detail
                                                                }
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-8 border-t mb-4 pt-4">
                        <div>
                            <Healine type="h3" className="mb-4">
                                Skills
                            </Healine>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-2">
                            {skills.map((skill, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <div key={index} className="grid grid-cols-2">
                                    <p className="">{skill.name}</p>
                                    <div className="flex items-center">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <svg
                                                key={i}
                                                className={classNames(
                                                    'mx-1 w-3 h-3 fill-current',
                                                    {
                                                        'text-brand':
                                                            i + 1 <=
                                                            skill.level,
                                                        'text-gray-300':
                                                            i + 1 >=
                                                            skill.level,
                                                    }
                                                )}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 border-t mb-4 pt-4">
                        <div>
                            <Healine type="h3" className="mb-4">
                                Languages
                            </Healine>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-2">
                            {languages.map((language, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <div key={index} className="grid grid-cols-2">
                                    <p className="">{language.name}</p>
                                    <div className="flex items-center">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <svg
                                                key={i}
                                                className={classNames(
                                                    'mx-1 w-3 h-3 fill-current',
                                                    {
                                                        'text-brand':
                                                            i + 1 <=
                                                            language.level,
                                                        'text-gray-300':
                                                            i + 1 >=
                                                            language.level,
                                                    }
                                                )}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4 border-t pt-4">
                        <Healine type="h3" className="mb-4">
                            Life
                        </Healine>
                        {life.map((item, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                className="mb-2 grid grid-cols-3 gap-8"
                            >
                                <div>
                                    <p>{formatDate(item.start)}</p>
                                </div>
                                <div className="col-span-2">
                                    <div className="mb-4">
                                        <div>
                                            {item.description.map(
                                                (description) => (
                                                    <p
                                                        className="mb-2"
                                                        key={description.id}
                                                    >
                                                        {description.detail}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-8 pt-4 border-t">
                        <div>
                            <Healine type="h3" className="mb-4">
                                Hobbies
                            </Healine>
                        </div>
                        <ul className="col-span-2 list-disc list-inside">
                            {hobbies.map((hobby) => (
                                <li key={hobby.id} className="mb-2">
                                    {hobby.detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Theme>
        </>
    );
};
export default Curriculum;
