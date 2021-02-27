import React from 'react';
import classname from 'classnames';

interface HeaderProps {
    className?: string;
}

export const Header = ({
    className,
    children,
}: HeaderProps & React.PropsWithChildren<HeaderProps>): React.ReactElement => (
    <header className={classname('flex p-4', className)}>{children}</header>
);
