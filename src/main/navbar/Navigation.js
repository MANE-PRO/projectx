import classes from "./Navigation.module.css";
import React, { useState } from "react";
function Navigation(props) {
  const [currPage, setCurrPage] = useState("home");
  function mainLogout() {
    props.onChangePage("logout");
  }
  function changePageHome() {
    props.onChangePage("home");
    setCurrPage("home");
  }
  function changePageCreatePortfolio() {
    props.onChangePage("portfolio");
    setCurrPage("portfolio");
  }
  function changePageIntraday() {
    props.onChangePage("intraday");
    setCurrPage("intraday");
  }
  function changePageLongTerm() {
    props.onChangePage("longterm");
    setCurrPage("longterm");
  }
  function changePageIntermediateTerm() {
    props.onChangePage("intermediate");
    setCurrPage("intermediate");
  }
  return (
    <div className={classes["nav"]}>
      <div className={`${classes["left"]}`}>
        <button
          onClick={changePageHome}
          className={currPage === "home" && classes["bgChange"]}
        >
          Home
        </button>
        <button
          onClick={changePageIntraday}
          className={currPage === "intraday" && classes["bgChange"]}
        >
          Intraday
        </button>
        <button
          onClick={changePageIntermediateTerm}
          className={currPage === "intermediate" && classes["bgChange"]}
        >
          Intermediate Term
        </button>
        <button
          onClick={changePageLongTerm}
          className={currPage === "longterm" && classes["bgChange"]}
        >
          Long Term
        </button>
      </div>
      <div className={`${classes["right"]}`}>
        <button
          onClick={changePageCreatePortfolio}
          className={currPage === "portfolio" && classes["bgChange"]}
        >
          Create Portfolio
        </button>
        <button onClick={mainLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navigation;
