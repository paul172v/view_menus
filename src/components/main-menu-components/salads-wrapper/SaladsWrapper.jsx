import React from "react";

import classes from "./SaladsWrapper.module.scss";

import SaladItem from "../salad-item/SaladItem";

const SaladsWrapper = (props) => {
  return (
    <div className={classes["section-wrapper"]}>
      <h2 className={classes["sub-heading"]}>{props.heading}</h2>
      <p className={classes.details}>
        Fresh mixed salad leaves, cherry tomatoes, cucumber, seasoned croutons,
        radish, green capsicum and spring onions. Served with a garlic ciabatta
        slice, new potatoes and a balsamic vinaigrette dressing
      </p>

      <p className={classes.choose}>Choose your topping:</p>

      {props.menuArray.map((el) => {
        if (el.dietary === undefined) {
          el.dietary = "";
        } else {
          el.dietary = `${el.dietary}`;
        }

        return (
          <SaladItem
            key={el.name}
            name={el.name}
            dietary={el.dietary}
            price={el.price}
          />
        );
      })}
    </div>
  );
};

export default SaladsWrapper;
