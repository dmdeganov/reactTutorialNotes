import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide!
      </button>
      {console.log(show)
      }
      {show && <Item />}
      {/* //NOTE:so we are not limited with html elements in conditional rendering */}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log('addeventlistener')
    
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('removeeventlistener')
      
      window.removeEventListener('resize', checkSize);
    };
  },[]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size : {size}</h2>
    </div>
  );
};

export default ShowHide;
