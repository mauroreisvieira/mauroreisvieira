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

export default Healine;
