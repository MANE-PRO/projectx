import Topcomp from "../UI/topcomp";
import React, { useState } from "react";
import Navigation from "./navbar/Navigation";

function Main(props) {
  const [page, setPage] = useState("home");
  function changePage(x) {
    if (x === "logout") props.onLogout();
    else setPage(x);
  }
  return (
    <div>
      <Topcomp page={page} />
      <Navigation onChangePage={changePage} />
    </div>
  );
}

export default Main;
