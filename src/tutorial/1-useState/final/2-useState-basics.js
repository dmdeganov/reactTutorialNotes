import React, { useState } from 'react';
//NOTE: all hooks start with 'use'
//NOTE:usestate comes from react library, named exporting so we must use curly braces
console.log(`that is the hook ${useState}
 `);
//NOTE: we can console it, but we can't invoke it outside of the component or function

const UseStateBasics = () => {
  //NOTE: the components where we use hooks must be uppercased, otherwise we get an error
  // console.log(useState());
  //NOTE: it shows the array with 2 elements. The first element of it is the state value(could be anything), the seconnd element is the function that controls this value.
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  let [text, setText] = useState('random title');
  //NOTE: the hook needs to be invoked in the function or component body
  //NOTE: the hook cannot be invoked conditionally

  console.log(setText);

  //NOTE: that the convention for names: value, and setValue
  const handleClick = () => {
    text === 'random title' ? (text = 'hello world') : (text = 'random title');
    setText(text);
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

// import React, { useState } from 'react';
// // starts with use
// // component must be uppercase
// // invoke inside function/component body
// // don't call hooks conditonally

// const UseStateBasics = () => {
//   // console.log(useState());
//   // const value = useState()[0];
//   // const handler = useState()[1];
//   // console.log(value, handler);

//   const [text, setText] = useState('random title');
//   const handleClick = () => {
//     if (text === 'random title') {
//       setText('hello world');
//     } else {
//       setText('random title');
//     }
//   };

//   return (
//     <React.Fragment>
//       <h1>{text}</h1>
//       <button type='button' className='btn' onClick={handleClick}>
//         change title
//       </button>
//     </React.Fragment>
//   );
// };

// export default UseStateBasics;
