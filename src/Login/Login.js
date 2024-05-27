import classes from "./Login.module.css";
import React, { useEffect, useRef } from "react";
function Login(props) {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      name: nameInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    props.onLogin(obj);
  };
  useEffect(() => {
    document.body.classList.add(classes["body"]);

    return () => {
      document.body.classList.remove(classes["body"]);
    };
  }, []);
  return (
    <div className={classes["container"]}>
      <p className={classes.text}>SIGN IN</p>
      <form className={classes["login-form"]} onSubmit={submitHandler}>
        <div className={classes["input"]}>
          <input type="text" placeholder="Username" ref={nameInputRef} />
          <input
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes["button"]}>
          <button className={classes["join"]} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
