import React, { useState, useEffect } from 'react';
//NOTE: useEffect makes sidefects, console.log is also sideefect 
//NOTE: by default useEffect runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  //NOTE: we are going to use useEffect just to change the title 
  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      //NOTE: we can't put a hook inside of conditional statement, but we can put conditional statement inside of the hook
      document.title = `New Messages(${value})`;
    }
    //NOTE:so every time we click the button we call usestate and we trigger rerender and this rerendering calls useEffect, so title will automatically change
  });
// }, []);
//NOTE: here [] is the second parameter, so called dependencies. If it is an empty array, then the code inside of useEffect function will run only once at the initial rendering.  
// }, [value]);
//NOTE:we can specify some values inside of dependencies, so if one of them changes then the code of useEffect will be executed


//NOTE:we can set up as many useEffects as we want, we can add more and use different dependencies
  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
