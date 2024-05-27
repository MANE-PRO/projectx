import classes from "./Icons.module.css";
import React from "react";
function Icons(props) {
  return (
    <div>
      <img
        className={classes["img"]}
        src={`../../icons/${props.fig}.png`}
        alt="no img loaded"
      />
    </div>
  );
}

export default Icons;
