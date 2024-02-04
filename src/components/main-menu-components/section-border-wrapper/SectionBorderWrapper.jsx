import React from "react";
import classes from "./SectionBorderWrapper.module.scss";
import MenuItem from "../menu-item/MenuItem";

const SectionBorderWrapper = (props) => {
  const menuArray = props.menuArray.map((el) => ({
    ...el,
    dietary: el.dietary || "",
  }));

  const renderMenuItems = (items) => {
    return items.map((el) => (
      <MenuItem
        key={el.name}
        name={el.name}
        details={el.details}
        price={el.price}
        dietary={el.dietary}
        add={el.add}
        scoops={el.scoops}
      />
    ));
  };

  const renderSubMenu = () => {
    if (props.subMenuHeading === "Sharer" && props.subMenuArray.length > 0) {
      return (
        <>
          <div className={classes["u-gap"]}></div>
          <h2 className={classes["sub-heading"]}>Sharer</h2>
          {renderMenuItems(props.subMenuArray)}
        </>
      );
    } else if (props.subMenuHeading === "Ice Cream") {
      return (
        <div className={classes["u-bold"]}>
          <p>Ask your server for available flavors</p>
          <p>Dairy-free vanilla ice cream available</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={classes["section-wrapper-border"]}>
      <h2 className={classes["sub-heading"]}>{props.heading}</h2>
      {renderMenuItems(menuArray)}
      {renderSubMenu()}
    </div>
  );
};

export default SectionBorderWrapper;
