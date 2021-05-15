import React from "react";
import defaultClasses from "./banner.module.css";
import mergeClasses from "../../helpers/mergeClasses";
import Image from "../Image";

const Banner = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);

  return (
    <div className={classes.banner}>
      <Image className={classes.background} src={props.url} />
      <div className={classes[props.position]}>{props.children}</div>
    </div>
  );
};

export default Banner;

