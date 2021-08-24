import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //NOTE: by default when we submit the button the page will refresh. If we had console.log in hadler it will not be consoled
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      //NOTE: we will se the obj with properties email, fisrtName and the values which we typed
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        {/* // NOTE: so that is the way: we add eventlistener onChange to the inputs and connect them with hooks values */}
        <form className="form" onSubmit={handleSubmit}>
          {/* //NOTE:we setup submit  in a form */}
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            {/* //NOTE:htmlFor is attribute 'for' in html */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              // NOTE: value is displayed in the form, if we set it to some text then it will be displayed on the page at page loading
              onChange={(e) => {
                console.log(e.target.value);
                setFirstName(e.target.value);
              }}

              //NOTE: if we omit the onChange handler then we will get this error: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly. SO WITHOUT THIS WE CAN'T TYPE ANYTHING INSIDE
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
          {/* //NOTE: we could also add the evenlistener on the button instead of whole form:  <button type='submit' onClick={handleSubmit}>add person</button> */}
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
