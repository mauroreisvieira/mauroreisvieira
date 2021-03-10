import classNames from 'classnames';
import React from 'react';

interface MarkdownProps {
    className?: string;
}

const Markdown: React.FC<MarkdownProps> = ({
    className,
    children,
}: MarkdownProps &
    React.PropsWithChildren<MarkdownProps>): React.ReactElement => (
    <article
        className={classNames(
            'prose prose-xl dark:prose-light mx-auto',
            className
        )}
    >
        {children}
    </article>
);

export default Markdown;
