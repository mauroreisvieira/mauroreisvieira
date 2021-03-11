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
            skinClasses: 'border-blue-500 bg-blue-500 text-blue-900',
            icon: (
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                </svg>)
        },
        warning: {
            skinClasses: 'border-yellow-500 bg-yellow-500',
        },
    };

    const { skinClasses, icon } = SKIN[skin];

    return (
        <div
            className={classNames(
                'flex items-center p-4 font-medium mb-8 border-l-4 rounded-md bg-opacity-10',
                skinClasses,
                className
            )}
        >
        { icon && (
            <div className="mr-2">
                { icon }
            </div>
        )}
            {children}
        </div>
    );
};

export default Alert;
