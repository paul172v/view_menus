import React from "react";

import classes from "./GenericItemWrapper.module.scss";
import MenuItem from "../menu-item/MenuItem";

const GenericItemWrapper = ({ heading, measure, menuArr }) => {
  return (
    <div className={classes["menu-wrapper"]}>
      <div className={classes["u-row"]}>
        <h2 className={classes["heading"]}>{heading}</h2>
        {measure && <p className={classes["measure"]}>{measure}ml</p>}
      </div>
      {menuArr.map((el) => (
        <MenuItem
          key={el.name}
          name={el.name}
          price={el.price}
          percentage={el.percentage}
          details={el.details}
        />
      ))}
    </div>
  );
};

export default GenericItemWrapper;
