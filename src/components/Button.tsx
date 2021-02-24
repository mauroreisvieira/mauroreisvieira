import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    skin?: 'gray' | 'indigo';
}

const Button: React.FC<ButtonProps> = ({
    skin = 'gray',
    children,
    ...otherProps
}: ButtonProps & React.PropsWithChildren<ButtonProps>) => (
    <button
        {...otherProps}
        type="button"
        className={`rounded-full p-3 cursor-pointer focus:outline-none hover:bg-${skin}-100 dark:hover:bg-${skin}-900 dark:text-white`}
    >
        {children}
    </button>
);

export default Button;
