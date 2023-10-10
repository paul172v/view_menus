import React from "react";

import classes from "./Home.module.scss";

import TransitionButton from "../../components/cross-menu-components/TransitionButton";

const Home = (props) => {
  const goToMainHandler = () => {
    props.onChangePage("main");
  };

  const goToKidsHandler = () => {
    props.onChangePage("kids");
  };

  const goToDrinksHandler = () => {
    props.onChangePage("drinks");
  };

  return (
    <div className={classes["page-wrapper"]}>
      <img className={classes.logo} src="./images/view.jpg" alt="view logo" />
      <div className={classes["u-row"]}>
        <TransitionButton name="Main Menu" onChangePage={goToMainHandler} />
        <TransitionButton name="Kids Menu" onChangePage={goToKidsHandler} />
        <TransitionButton name="Drinks Menu" onChangePage={goToDrinksHandler} />
      </div>
    </div>
  );
};

export default Home;
