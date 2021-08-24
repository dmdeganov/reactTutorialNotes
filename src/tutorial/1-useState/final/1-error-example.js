import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'hello people';
    //NOTE: the thing is that however we changed the value of title , the title in the webpage is not rerendered, so that's why we need hooks
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

