import React, { forwardRef } from 'react';
import classname from 'classnames';

type NativeButton = React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends NativeButton {
    skin?: 'gray' | 'indigo';
    className?: string;
    children: React.ReactNode;
}

const Button = forwardRef(
    (
        { skin = 'gray', className, children, ...otherProps }: ButtonProps,
        ref: React.Ref<HTMLButtonElement & HTMLAnchorElement>
    ) => {
        const { href } = otherProps;
        const TAG = href ? 'a' : 'button';

        return (
            <TAG
                {...otherProps}
                ref={ref}
                type="button"
                className={classname(
                    `inline-flex rounded-full p-3 cursor-pointer focus:outline-none hover:bg-${skin}-100 dark:hover:bg-${skin}-800 dark:text-white`,
                    className
                )}
            >
                {children}
            </TAG>
        );
    }
);

export default Button;
