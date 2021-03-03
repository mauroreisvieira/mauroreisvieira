import React, { forwardRef } from 'react';
import classname from 'classnames';

type AnchorType = React.HTMLAttributes<HTMLSpanElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface AnchorProps extends AnchorType {
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
            className={classname(
                `text-brand hover:text-brand-light focus:outline-none cursor-pointer`,
                className
            )}
        >
            {children}
        </a>
    )
);
