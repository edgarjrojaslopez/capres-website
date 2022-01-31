import React from 'react';

const ContentLayout = (props) => {
  return <div className='flex flex-col flex-grow z-10 mb-auto md:flex-row md:top-0 md:left-0 md:justify-center md:items-center w-full h-screen'>
    {props.children}
  </div>;
};

export default ContentLayout;

