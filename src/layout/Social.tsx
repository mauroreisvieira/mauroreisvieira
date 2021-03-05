import { Button } from '@/components/Button';
import classNames from 'classnames';
import React from 'react';

interface SocialProps {
    className?: string;
}

export const Social: React.FC<SocialProps> = ({
    className,
}): React.ReactElement => (
    <div className={classNames('space-x-3', className)}>
        <Button
            href="https://github.com/mauroreisvieira"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
        >
            <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <g data-name="github">
                    <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" />
                </g>
            </svg>
        </Button>
        <Button
            href="https://twitter.com/mauroreisvieira"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
        >
            <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <g data-name="twitter">
                    <path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20" />
                </g>
            </svg>
        </Button>
        <Button
            href="https://www.linkedin.com/in/mauroreisvieira/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
        >
            <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <g data-name="linkedin">
                    <path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z" />
                    <rect
                        x="3"
                        y="9.3"
                        width="4.5"
                        height="11.7"
                        rx=".9"
                        ry=".9"
                    />
                    <circle cx="5.25" cy="5.25" r="2.25" />
                </g>
            </svg>
        </Button>
        <Button
            href="https://codepen.io/mauroreisvieira/"
            target="_blank"
            rel="noopener noreferrer"
            title="Codepen"
        >
            <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
                <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                <line x1="3" y1="9" x2="3" y2="15" />
                <line x1="21" y1="9" x2="21" y2="15" />
                <line x1="12" y1="3" x2="12" y2="9" />
                <line x1="12" y1="15" x2="12" y2="21" />
            </svg>
        </Button>
    </div>
);
