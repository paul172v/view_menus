import React from "react";

import classes from "./FilterToggleButtons.module.scss";

const FilterToggleButtons = (props) => {
  return (
    <React.Fragment>
      <div className={classes["u-col"]}>
        <p className={classes["filter-text"]}>Filter menu for...</p>
        <div className={classes["u-row"]}>
          <button
            onClick={props.toggleGlutenFree}
            className={classes["btn-filter"]}
          >
            Gluten Free
          </button>
          <div className={classes.tick}>
            {props.dietaryFilter === "gfo" && (
              <p className={classes["tick"]}>🗹</p>
            )}
            {props.dietaryFilter !== "gfo" && (
              <p className={classes["tick"]}>☐</p>
            )}
          </div>
        </div>
        <div className={classes["u-row"]}>
          <button
            onClick={props.toggleVegetarian}
            className={classes["btn-filter"]}
          >
            Vegetarian
          </button>
          <div className={classes.tick}>
            {props.dietaryFilter === "v" && (
              <p className={classes["tick"]}>🗹</p>
            )}
            {props.dietaryFilter !== "v" && (
              <p className={classes["tick"]}>☐</p>
            )}
          </div>
        </div>
        <div className={classes["u-row"]}>
          <button onClick={props.toggleVegan} className={classes["btn-filter"]}>
            Vegan
          </button>
          <div className={classes.tick}>
            {props.dietaryFilter === "vgo" && (
              <p className={classes["tick"]}>🗹</p>
            )}
            {props.dietaryFilter !== "vgo" && (
              <p className={classes["tick"]}>☐</p>
            )}
          </div>
        </div>
      </div>
      <p className={classes.key}>
        gfo - Gluten Free Option Available, v - Vegetarian, vgo - Vegan Option
        Available
      </p>
    </React.Fragment>
  ); //
};

export default FilterToggleButtons;
