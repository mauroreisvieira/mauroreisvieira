import React from 'react';
import classNames from 'classnames';

interface HeaderProps {
    className?: string;
}

export const Header = ({
    className,
    children,
}: HeaderProps & React.PropsWithChildren<HeaderProps>): React.ReactElement => (
    <header className={classNames('print:hidden flex p-4', className)}>{children}</header>
);
