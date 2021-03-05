type Description = {
    id: number;
    detail: string;
};

type Details = {
    firstName: string;
    lastName: string;
    picture?: string;
    job: string;
    email: string;
    website: string;
    phone: string;
    country: string;
    city: string;
    address: string;
    zip: string;
    license: string;
    nationality: string;
    placeOfBirth: string;
    dateOfBirh: Date;
};

type SocialNetwork = {
    id: number;
    name: string;
    link: string;
};

type Employment = {
    job: string;
    employer: string;
    link: string;
    start: Date;
    end: Date | 'present';
    city: string;
    description: Description[];
};

type Education = {
    school: string;
    degree: string;
    link: string;
    city: string;
    start: Date;
    end: Date | 'present';
    description?: Description[];
    note?: string;
};

type Skills = {
    name: string;
    level: number;
};

type Life = {
    name?: string;
    start: Date;
    end: Date;
    description: Description[];
};

interface About {
    details: Details;
    socialNetwork: SocialNetwork[];
    profile: {
        summary: Description[];
    };
    employment: Employment[];
    education: Education[];
    skills: Skills[];
    languages: Skills[];
    hobbies: Description[];
    life: Life[];
}

export const ABOUT: About = {
    details: {
        firstName: 'Mauro Reis',
        lastName: 'Vieira',
        job: 'Front End Developer',
        email: 'mauroreisvieira@gmail.com',
        phone: '917771054',
        country: 'Portugal',
        city: 'Pousos, Leiria',
        address: 'Travessa Casal do Cortador, nº4',
        zip: '2410-212',
        license: 'A e A1, B e B1',
        nationality: 'Portuguese',
        placeOfBirth: 'São João Baptista - Tomar',
        dateOfBirh: new Date('1990-06-01'),
        website: 'https://mauroreisvieira.com',
    },
    socialNetwork: [
        {
            id: 1,
            name: 'Twitter',
            link: 'https://twitter.com/mauroreisvieira',
        },
        {
            id: 2,
            name: 'GitHub',
            link: 'https://github.com/mauroreisvieira',
        },
        {
            id: 3,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/mauroreisvieira/',
        },
        {
            id: 4,
            name: 'Codepen',
            link: 'https://codepen.io/mauroreisvieira/',
        },
    ],
    profile: {
        summary: [
            {
                id: 1,
                detail:
                    'I am a Portuguese Front End Developer, now fully focused on JavaScript, React, Next.js.',
            },
            {
                id: 2,
                detail:
                    'I also have some open source projects available on GitHub, because I believe in collaboration rather than competition.',
            },
            {
                id: 3,
                detail:
                    'I like to share my knowledge and experience with others and this helps me to improve my skills and consequently to become a better developer.',
            },
        ],
    },
    employment: [
        {
            job: 'Front End Developer',
            employer: 'Namecheap',
            link: 'http://www.namecheap.com',
            start: new Date('2017-10-01'),
            end: 'present',
            city: 'Leiria',
            description: [
                { id: 1, detail: 'HTML + CSS/SCSS' },
                { id: 2, detail: 'JavaScript/Typescript, Vue, React' },
                { id: 3, detail: 'Webpack + Gulp.js' },
                { id: 4, detail: 'Hermione +  Chai + Enzyme ' },
                { id: 5, detail: 'Scrum' },
            ],
        },
        {
            job: 'Full Stack Web Developer',
            employer: 'Hi INTERACTIVE',
            link: 'http://www.hi-interactive.pt',
            start: new Date('2016-05-01'),
            end: new Date('2017-10-01'),
            city: 'Leiria',
            description: [
                {
                    id: 1,
                    detail: 'HTML + CSS/SCSS',
                },
                {
                    id: 2,
                    detail: 'JQuery/JavaScript',
                },
                {
                    id: 3,
                    detail: 'Gulp.js',
                },
                {
                    id: 4,
                    detail: 'PHP (Zend & Laravel)',
                },
                {
                    id: 5,
                    detail: 'MySQL',
                },
            ],
        },
        {
            job: 'Web Developer',
            employer: 'WayAcross',
            link: 'http://www.wayacross.pt',
            start: new Date('2013-04-01'),
            end: new Date('2016-05-01'),
            city: 'Leiria',
            description: [
                {
                    id: 1,
                    detail: 'HTML + CSS',
                },
                {
                    id: 2,
                    detail: 'JQuery/JavaScript',
                },
                {
                    id: 3,
                    detail: 'PHP (Codeigniter)',
                }
            ],
        },
    ],
    education: [
        {
            school: 'Instituto Politécnico de Leiria',
            link: 'https://www.ipleiria.pt/',
            degree: 'Computer Engineering',
            city: 'Leiria',
            start: new Date('2013-09-01'),
            end: 'present',
            note:
                'The course has been frozen since 2017, it is something I intend to finish soon.',
        },
        {
            school: 'Instituto Politécnico de Leiria',
            link: 'https://www.ipleiria.pt/',
            degree: 'Technological Specialization Course',
            city: 'Leiria',
            start: new Date('2011-11-01'),
            end: new Date('2013-07-01'),
            description: [
                {
                    id: 1,
                    detail:
                        'Install and manage databases integrated into websites;',
                },
                {
                    id: 2,
                    detail: 'Administer web applications;',
                },
                {
                    id: 3,
                    detail:
                        'Supervise the construction and development of web applications using HTML, CSS, JavaScript, XML, and dynamic pages (PHP) technologies.',
                },
            ],
        },
    ],
    skills: [
        {
            name: 'JavaScript',
            level: 4,
        },
        {
            name: 'Typescript',
            level: 4,
        },
        {
            name: 'React',
            level: 4,
        },
        {
            name: 'Node.js',
            level: 3,
        },
        {
            name: 'Vue',
            level: 4,
        },
        {
            name: 'SCSS/CSS',
            level: 5,
        },
        {
            name: 'TailwindCSS',
            level: 4,
        },
        {
            name: 'HTML',
            level: 5,
        },
        {
            name: 'Git',
            level: 4,
        },
        {
            name: 'PHP',
            level: 3,
        },
        {
            name: 'Codeigniter',
            level: 3,
        },
        {
            name: 'Laravel',
            level: 3,
        },
    ],
    languages: [
        {
            name: 'Portuguese',
            level: 5,
        },
        {
            name: 'English',
            level: 4,
        },
        {
            name: 'Spanish',
            level: 2,
        },
    ],
    hobbies: [
        {
            id: 1,
            detail: 'I like to do sports, play football, do weight training and mountain biking.',
        },
        {
            id: 2,
            detail: 'I like to do DIY more related to construction.',
        },
    ],
    life: [
        {
            start: new Date('2019-07-02'),
            end: new Date(),
            description: [
                {
                    id: 1,
                    detail: 'A new stage of my life started in 2019.',
                },
                {
                    id: 2,
                    detail:
                        'I always dreamed of being father and now I have that privilege of having a beautiful and wonderful son (Lourenço).',
                },
                {
                    id: 3,
                    detail:
                        'Since then it has been the best days of my life, to have in my hands the responsibility of protecting, caring and educating a human being.',
                },
            ],
        },
    ],
};
