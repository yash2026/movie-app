import React from 'react';
import Navs from './Navs';
import Title from './Title';

const Mainpagelayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box-office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default Mainpagelayout;
