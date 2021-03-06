import classNames from 'classnames';
import React, { forwardRef } from 'react';

interface ProgressProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
}

const Progress = forwardRef(
    (
        { className, ...otherProps }: ProgressProps,
        ref: React.Ref<HTMLDivElement>
    ): React.ReactElement => (
        <div className="fixed top-0 w-full">
            <div
                ref={ref}
                {...otherProps}
                className={classNames('flex w-full bg-brand transition duration-75 ease-in-out', className)}
            />
        </div>
    )
);

export default Progress;
