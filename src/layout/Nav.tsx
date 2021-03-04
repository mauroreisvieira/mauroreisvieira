import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/Button';
import { ThemeChanger } from '@/components/ThemeChanger';

interface NavProps {
    className?: string;
}

export const Nav: React.FC<NavProps> = ({ className }): React.ReactElement => (
    <nav className={classNames('flex w-full justify-between', className)}>
        <div>
            <Link href="/">
                <Button aria-label="Home">
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                </Button>
            </Link>
        </div>
        <div>
            <ThemeChanger />
        </div>
    </nav>
);
