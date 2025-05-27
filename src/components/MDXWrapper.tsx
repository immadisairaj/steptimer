import { ReactNode } from 'react';

interface MDXWrapperProps {
    children: ReactNode;
}

const MDXWrapper = ({ children }: MDXWrapperProps) => {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert bg-red-100">
            {children}
        </div>
    );
};

export default MDXWrapper;