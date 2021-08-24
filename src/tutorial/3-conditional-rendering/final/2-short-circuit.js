import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  console.log(isError)
  

  return (
    <>

      {/* {if(){console.log('hello world')}} */}
      {/* //NOTE: we can't use if inside of return */}
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => {setIsError(!isError)
      }}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {/* NOTE: if text is not true nothing will be displayed */}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
