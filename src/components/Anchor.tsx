import classNames from 'classnames';
import React, { forwardRef } from 'react';

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children: React.ReactNode;
}

const Anchor = forwardRef(
    (
        { className, children, ...otherProps }: AnchorProps,
        ref: React.Ref<HTMLAnchorElement>
    ): React.ReactElement => (
        <a
            {...otherProps}
            ref={ref}
            className={classNames(
                'inline-flex items-center text-brand hover:text-brand-light shadow-border focus:outline-none cursor-pointer',
                className
            )}
        >
            {children}
        </a>
    )
);

export default Anchor;
