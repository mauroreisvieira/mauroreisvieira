import React, { forwardRef } from 'react';

type DangerouslySetInnerHTML = {
    __html: string;
};

interface MarkdownProps {
    content: DangerouslySetInnerHTML;
}

export const Markdown = forwardRef(
    (
        { content }: MarkdownProps,
        ref: React.Ref<HTMLDivElement>
    ): React.ReactElement => (
        <article
            ref={ref}
            className="prose prose-xl dark:prose-light mx-auto"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={content}
        />
    )
);
