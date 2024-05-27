import React, { useState } from "react";
import Login from "./Login/Login";
import Admin from "./admin/Admin";
import Main from "./main/Main";
import classes from "./App.module.css";
function App() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const changeIsLoginPageFalse = (props) => {
    if (props.name === "admin") setIsAdmin(true);
    setIsLoginPage(false);
  };

  const changeToLogout = () => {
    setIsLoginPage(true);
    if (isAdmin) setIsAdmin(false);
  };

  return (
    <div className={classes["app"]}>
      {isLoginPage && <Login onLogin={changeIsLoginPageFalse} />}
      {!isLoginPage && isAdmin && <Admin onLogout={changeToLogout} />}
      {!isLoginPage && !isAdmin && <Main onLogout={changeToLogout} />}
    </div>
  );
}

export default App;
