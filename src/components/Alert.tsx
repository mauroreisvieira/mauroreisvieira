import classNames from 'classnames';
import React from 'react';

type AlertSkin = {
    [key: string]: {
        skinClasses: string;
    };
};

interface AlertProps {
    skin?: 'brand' | 'warning';
    className?: string;
}

const Alert: React.FC<AlertProps> = ({
    skin = 'brand',
    className,
    children,
}: AlertProps & React.PropsWithChildren<AlertProps>): React.ReactElement => {
    const SKIN: AlertSkin = {
        brand: {
            skinClasses: 'border-brand bg-brand',
        },
        warning: {
            skinClasses: 'border-yellow-500 bg-yellow-500',
        },
    };

    const { skinClasses } = SKIN[skin];

    return (
        <div
            className={classNames(
                'p-8 mb-12 border-l-4 text-lg leading-relaxed dark:text-white relative rounded bg-opacity-10',
                skinClasses,
                className
            )}
        >
            {children}
        </div>
    );
};

export default Alert;
