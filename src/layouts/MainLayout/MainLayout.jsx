import React from 'react';

const MainLayout = (props) => {
  return <div className='flex flex-col relative w-full h-full'>
    {props.children}
  </div>;
};

export default MainLayout;
