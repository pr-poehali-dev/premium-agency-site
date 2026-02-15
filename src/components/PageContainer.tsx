import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 pb-24 md:pb-28 lg:pb-32">
      {children}
    </div>
  );
};

export default PageContainer;