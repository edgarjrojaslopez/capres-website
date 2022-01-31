import React from 'react';

const HeaderLayout = (props) => {
  return <header className='flex absolute z-20  md:justify-between md:items-center px-6 items-center md:px-4 py-2 bg-mobile-image-background md:bg-azulCapres-500 bg-cover md:bg-azulCapres-800 w-full h-1/5  md:h-auto'>
    {props.children}
  </header>;
};

export default HeaderLayout;