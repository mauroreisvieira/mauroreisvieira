import React, { forwardRef } from 'react';
import classNames from 'classnames';

type HealineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface HealineProps {
    type?: HealineType;
    className?: string;
    children: React.ReactNode;
}

export const Healine = ({
    type = 'h1',
    className,
    children,
}: HealineProps): React.ReactElement => {
    const SIZES = {
        h1: {
            size: 'text-6xl lg:text-8xl',
        },
        h2: {
            size: 'text-3xl lg:text-5xl',
        },
        h3: {
            size: 'text-xl',
        },
    };

    const TAG = type;
    const { size } = SIZES[type];

    return (
        <TAG
            className={classNames(
                'font-black dark:text-white',
                size,
                className
            )}
        >
            {children}
        </TAG>
    );
};
