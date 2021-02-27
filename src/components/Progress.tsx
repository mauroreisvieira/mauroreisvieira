import React, { forwardRef } from 'react';
import classname from 'classnames';

interface ProgressProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
}

export const Progress = forwardRef(
    (
        { className, ...otherProps }: ProgressProps,
        ref: React.Ref<HTMLSpanElement>
    ): React.ReactElement => (
        <div className="fixed top-0 w-full">
            <div className="overflow-hidden h-1 flex">
                <span
                    ref={ref}
                    {...otherProps}
                    className={classname(`flex bg-brand transition duration-300 ease-in-out`, className)}
                />
            </div>
        </div>
    )
);
