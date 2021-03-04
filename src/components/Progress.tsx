import React, { forwardRef } from 'react';
import classNames from 'classnames';

interface ProgressProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
}

export const Progress = forwardRef(
    (
        { className, ...otherProps }: ProgressProps,
        ref: React.Ref<HTMLDivElement>
    ): React.ReactElement => (
        <div className="fixed top-0 w-full">
            <div
                ref={ref}
                {...otherProps}
                className={classNames('h-1 flex bg-brand transition duration-300 ease-in-out', className)}
            />
        </div>
    )
);
