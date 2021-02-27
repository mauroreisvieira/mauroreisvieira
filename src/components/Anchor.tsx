import React from 'react';
import classname from 'classnames';

type AnchorType = React.HTMLAttributes<HTMLSpanElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface AnchorProps extends AnchorType {
    className?: string;
}

export const Anchor: React.FC<AnchorProps> = ({
    className,
    children,
    ...otherProps
}: AnchorProps & React.PropsWithChildren<AnchorProps>): React.ReactElement => {
    const { href } = otherProps;
    const TAG = href ? 'a' : 'button';

    return (
        <TAG
            {...otherProps}
            className={classname(
                `text-brand hover:text-brand-light focus:outline-none cursor-pointer`,
                className
            )}
        >
            {children}
        </TAG>
    );
};
