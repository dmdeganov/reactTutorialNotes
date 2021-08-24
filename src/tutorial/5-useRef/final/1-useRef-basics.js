import React, { useEffect, useRef } from 'react';
//NOTE: useRef is almost like useState.
//NOTE: It also preserves value between renders
//NOTE: DOES NOT trigger re-render
//NOTE:usually is used to target DOM nodes/elements and save it's values

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  //NOTE:refContainer here will be an object with one property 'current' which will be equal to dom element input
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
    //NOTE: once we refresh the page we will have focus in the input
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
