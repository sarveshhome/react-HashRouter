import React from 'react';

const UseRefDemo = () => {
  const nameInputRef = React.useRef();

  const firstnameChangeHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    console.log(nameInputRef.current.value);
    const UserName = nameInputRef.current.value;
    if (UserName.trim().length === 0) {
      return;
    }
  };

  return (
    <React.Fragment>
      <input
        id="firstname"
        type="input"
        onChange={firstnameChangeHandler}
        ref={nameInputRef}
      />
    </React.Fragment>
  );
};

export default UseRefDemo;
