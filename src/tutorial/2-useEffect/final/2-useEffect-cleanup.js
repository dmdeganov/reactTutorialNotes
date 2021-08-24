import React, { useState, useEffect } from 'react';

//TITLE: cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    //NOTE: so with every resize setSize will trigger rerendering and useEffect will also run again
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
    //NOTE:by this first we will remove eventlistener and only then add a new one, because otherwise we would have thousands of them. In the console cleanup will appear first, then useEffect will log
  });

  // }, []);

  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
