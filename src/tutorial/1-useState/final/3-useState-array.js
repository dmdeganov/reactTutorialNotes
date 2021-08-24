import React from 'react';
import { data } from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  //NOTE: that is another way of doing this:
  //NOTE: import React, { useState } from 'react';

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        {/* NOTE:  onClick={ setPeople([])}> then onClick function will be executed right at loading the page */}
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
// import React from 'react';
// import { data } from '../../../data';
// const UseStateArray = () => {
//   const [people, setPeople] = React.useState(data);

//   const removeItem = (id) => {
//     let newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople);
//   };
//   return (
//     <>
//       {people.map((person) => {
//         const { id, name } = person;
//         return (
//           <div key={id} className='item'>
//             <h4>{name}</h4>
//             <button onClick={() => removeItem(id)}>remove</button>
//           </div>
//         );
//       })}
//       <button className='btn' onClick={() => setPeople([])}>
//         clear items
//       </button>
//     </>
//   );
// };

// export default UseStateArray;
