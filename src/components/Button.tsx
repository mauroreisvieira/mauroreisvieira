import React, { forwardRef } from 'react';
import classNames from 'classnames';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends ButtonType {
    className?: string;
    children: React.ReactNode;
}

export const Button = forwardRef(
    (
        { className, children, ...otherProps }: ButtonProps,
        ref: React.Ref<HTMLButtonElement & HTMLAnchorElement>
    ): React.ReactElement => {
        const { href } = otherProps;
        const TAG = href ? 'a' : 'button';

        return (
            <TAG
                {...otherProps}
                ref={ref}
                type="button"
                className={classNames(
                    'inline-flex rounded-full p-3 cursor-pointer focus:outline-none dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800',
                    className
                )}
            >
                {children}
            </TAG>
        );
    }
);
