import React, { forwardRef } from 'react';
import classNames from 'classnames';

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children: React.ReactNode;
}

export const Anchor = forwardRef(
    (
        { className, children, ...otherProps }: AnchorProps,
        ref: React.Ref<HTMLAnchorElement>
    ): React.ReactElement => (
        <a
            {...otherProps}
            ref={ref}
            className={classNames(
                `text-brand hover:text-brand-light focus:outline-none cursor-pointer`,
                className
            )}
        >
            {children}
        </a>
    )
);
