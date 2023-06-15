import React from 'react';
import { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../index.css';

const LoginV2 = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  // Tip: use useRef instead of useState to reduce times of re-render
  // which happens everytime when the value of name or password changed

  const [account, setAccount] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    // Tip: use functional call for set functions.
    setAccount(() => {
      return `${name}, ${password}`;
    });

    // Do something
  };

  return (
    <>
      <form onSubmit={onSubmit} className="styleForm">
        <TextField id="email" inputRef={nameRef} />
        <TextField id="password" inputRef={passwordRef} />
        <Button
          color="primary"
          variant="contained"
          style={{ marginTop: 10 }}
          type="submit"
        >
          Submit
        </Button>
      </form>
      {account}
    </>
  );
};

export default LoginV2;
