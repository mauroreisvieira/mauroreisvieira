import classNames from 'classnames';
import React from 'react';

type HealineSizes = {
    [key: string]: {
        size: string;
    };
};

interface HealineProps {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    className?: string;
}

const Healine: React.FC<HealineProps> = ({
    type = 'h1',
    className,
    children,
}: HealineProps &
    React.PropsWithChildren<HealineProps>): React.ReactElement => {
    const SIZES: HealineSizes = {
        h1: {
            size: 'text-7xl lg:text-8xl',
        },
        h2: {
            size: 'text-5xl lg:text-6xl',
        },
        h3: {
            size: 'text-2xl lg:text-3xl ',
        }
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

export default Healine;
