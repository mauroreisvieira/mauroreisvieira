import classNames from 'classnames';
import React from 'react';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({
    className,
    children,
}: HeaderProps & React.PropsWithChildren<HeaderProps>): React.ReactElement => (
    <header className={classNames('print:hidden flex p-4', className)}>
        {children}
    </header>
);
