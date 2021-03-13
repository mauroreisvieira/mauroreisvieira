import classNames from 'classnames';
import React from 'react';

type AlertSkin = {
    [key: string]: {
        skinClasses: string;
        icon?: React.ReactElement;
    };
};

interface AlertProps {
    skin?: 'info' | 'warning';
    className?: string;
}

const Alert: React.FC<AlertProps> = ({
    skin = 'info',
    className,
    children,
}: AlertProps & React.PropsWithChildren<AlertProps>): React.ReactElement => {
    const SKIN: AlertSkin = {
        info: {
            skinClasses: 'border-blue-500 bg-blue-500',
        },
        warning: {
            skinClasses: 'border-yellow-500 bg-yellow-500',
        },
    };

    const { skinClasses, icon } = SKIN[skin];

    return (
        <div
            className={classNames(
                'flex p-4 mb-8 border-l-4 rounded-md bg-opacity-10',
                skinClasses,
                className
            )}
        >
        { icon && (
            <div className="mr-2">
                { icon }
            </div>
        )}
            <div className="leading-snug">
                {children}
            </div>
        </div>
    );
};

export default Alert;
