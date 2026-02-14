import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="p-2 sm:p-5 pb-32">
      <div
        className="rounded-3xl"
        style={{
          background: 'rgba(0,0,0,0.6)',
          border: '1px solid rgba(250,204,21,0.2)',
          backdropFilter: 'blur(40px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
