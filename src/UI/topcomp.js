import classes from "./Topcomp.module.css";
import Icons from "./Icons";
import React from "react";
function Topcomp(props) {
  return (
    <div className={classes["container"]}>
      <Icons fig={props.page} />
    </div>
  );
}

export default Topcomp;
