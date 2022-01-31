import React from 'react';

const FooterLayout = (props) => {
  return <footer className='flex flex-col md:flex-row  z-10 bottom-0 left-0 bg-azulCapres-600 w-full h-auto'>
    {props.children}
  </footer>;
};

export default FooterLayout;
