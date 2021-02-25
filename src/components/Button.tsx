import React, { forwardRef } from 'react';

type NativeButton = React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface ButtonProps extends NativeButton {
    skin?: 'gray' | 'indigo';
    children: React.ReactNode;
}

const Button = forwardRef(({
    skin = 'gray',
    children,
    ...otherProps
}: ButtonProps, ref: React.Ref<HTMLButtonElement & HTMLAnchorElement>) => {
    const { href } = otherProps;
    const TAG = href ? 'a' : 'button';

    return (
        <TAG
            {...otherProps}
            ref={ref}
            type="button"
            className={`inline-flex rounded-full p-3 cursor-pointer focus:outline-none hover:bg-${skin}-100 dark:hover:bg-${skin}-800 dark:text-white`}
        >
            {children}
        </TAG>
    );
});

export default Button;
