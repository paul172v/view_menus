import React, { useReducer } from "react";
import { GiSquirrel } from "react-icons/gi";
import { GoSquirrel } from "react-icons/go";

import classes from "./Kids.module.scss";

import kidsMenu from "../../dev/menus/kidsMenu";

import FilterToggleButtons from "../../components/cross-menu-components/FilterToggleButtons";
import PrimaryColorWrapper from "../../components/kids-menu-components/primary-color-wrapper/PrimaryColorWrapper";
import SecondaryColorWrapper from "../../components/kids-menu-components/secondary-color-wrapper/SecondaryColorWrapper";
import MakeAMealWrapper from "../../components/kids-menu-components/make-a-meal-wrapper/MakeAMealWrapper";

const initState = {
  dietaryFilter: "none",
  startersArr: kidsMenu.startersArr,
  mainsArr: kidsMenu.mainsArr,
  makeAMealMainsArr: kidsMenu.makeAMealArr[0],
  makeAMealSidesArr: kidsMenu.makeAMealArr[1],
  makeAMealExtrasArr: kidsMenu.makeAMealArr[2],
  dessertsArr: kidsMenu.dessertsArr,
};

const defaultState = {
  dietaryFilter: "none",
  startersArr: kidsMenu.startersArr,
  mainsArr: kidsMenu.mainsArr,
  makeAMealMainsArr: kidsMenu.makeAMealArr[0],
  makeAMealSidesArr: kidsMenu.makeAMealArr[1],
  makeAMealExtrasArr: kidsMenu.makeAMealArr[2],
  dessertsArr: kidsMenu.dessertsArr,
};

const reducer = (state, { type, value }) => {
  switch (type) {
    case "toggleGlutenFreeFilter":
      return state.dietaryFilter === "glutenFree"
        ? {
            ...defaultState,
          }
        : {
            dietaryFilter: "glutenFree",
          };
    case "toggleVegetarianFilter":
      return state.dietaryFilter === "vegetarian"
        ? {
            ...defaultState,
          }
        : {
            dietaryFilter: "vegetarian",
          };
    case "toggleVeganFilter":
      return state.dietaryFilter === "vegan"
        ? {
            ...defaultState,
          }
        : {
            dietaryFilter: "vegan",
          };
    case "updateStartersArr":
      return { ...state, startersArr: value };
    case "updateMainsArr":
      return { ...state, mainsArr: value };
    case "updateMakeAMealMainsArr":
      return { ...state, makeAMealMainsArr: value };
    case "updateMakeAMealSidesArr":
      return { ...state, makeAMealSidesArr: value };
    case "updateMakeAMealExtrasArr":
      return { ...state, makeAMealExtrasArr: value };
    case "updateDessertsArr":
      return { ...state, dessertsArr: value };
    default:
      throw new Error();
  }
};

const Kids = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const goToHomeHandler = () => {
    props.onChangePage("home");
  };

  const toggleGlutenFreeHandler = () => {
    dispatch({ type: "toggleGlutenFreeFilter" });
    state.dietaryFilter !== "glutenFree" && filterAllArraysHandler("gfo");
  };

  const toggleVegetarianHandler = () => {
    dispatch({ type: "toggleVegetarianFilter" });
    state.dietaryFilter !== "vegetarian" && filterAllArraysHandler("v");
  };

  const toggleVeganHandler = () => {
    dispatch({ type: "toggleVeganFilter" });
    state.dietaryFilter !== "vegan" && filterAllArraysHandler("vgo");
  };

  const filterAllArraysHandler = (dietaryValue) => {
    //// 1) This is a callback function that is used to create a placeholder array based on which filter option is inputted and then update a selected state array with the filtered results
    const filterArrayCallback = (type, array, dietaryValue) => {
      const placeholderArr = [];

      for (let el of array) {
        if (
          (dietaryValue === "v" && el.dietary === "v") ||
          (dietaryValue === "v" && el.dietary === "v,vgo")
        ) {
          placeholderArr.push(el);
        }
        if (dietaryValue !== "v" && el.dietary.includes(dietaryValue)) {
          placeholderArr.push(el);
        }
      }

      dispatch({ type, value: placeholderArr });
    };

    //// 2) We now use the above callback on all of the state arrays to update them with the filtered results
    filterArrayCallback(
      "updateStartersArr",
      kidsMenu.startersArr,
      dietaryValue
    );

    filterArrayCallback("updateMainsArr", kidsMenu.mainsArr, dietaryValue);

    filterArrayCallback(
      "updateMakeAMealMainsArr",
      kidsMenu.makeAMealArr[0],
      dietaryValue
    );

    filterArrayCallback(
      "updateMakeAMealSidesArr",
      kidsMenu.makeAMealArr[1],
      dietaryValue
    );

    filterArrayCallback(
      "updateMakeAMealExtrasArr",
      kidsMenu.makeAMealArr[2],
      dietaryValue
    );

    filterArrayCallback(
      "updateDessertsArr",
      kidsMenu.dessertsArr,
      dietaryValue
    );
  };

  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["menu-wrapper"]}>
        <div className={classes["u-col"]}>
          <div className={classes["title-wrapper"]}>
            <div className={classes["u-row"]}>
              <i className={classes.icon}>
                <GiSquirrel />
              </i>
              <h1 className={classes.heading}>Kids Menu</h1>
              <i className={classes.icon}>
                <GoSquirrel />
              </i>
            </div>
            <p className={classes["sub-heading"]}>
              For the wee ones we have all your favourites in fantastic kiddie
              sized portions.
            </p>
          </div>
          <div className={classes["u-row"]}></div>
          <FilterToggleButtons
            toggleGlutenFree={toggleGlutenFreeHandler}
            toggleVegetarian={toggleVegetarianHandler}
            toggleVegan={toggleVeganHandler}
            dietaryFilter={state.dietaryFilter}
          />
          {state.startersArr.length > 0 && (
            <SecondaryColorWrapper
              heading="STARTERS"
              tagline="Kick off your meal the right way"
              menuArray={state.startersArr}
            />
          )}
          {state.mainsArr.length > 0 && (
            <PrimaryColorWrapper
              heading="MAIN MEALS"
              tagline="All your favourites in one place"
              menuArray={state.mainsArr}
            />
          )}
        </div>
        <div className={classes["u-col"]}>
          {state.makeAMealMainsArr.length > 0 && (
            <MakeAMealWrapper
              mains={state.makeAMealMainsArr}
              sides={state.makeAMealSidesArr}
              extras={state.makeAMealExtrasArr}
            />
          )}
          {state.dessertsArr.length > 0 && (
            <SecondaryColorWrapper
              heading="DESSERTS"
              tagline="Save room for one of our delicious desserts"
              menuArray={state.dessertsArr}
            />
          )}
        </div>
        <button className={classes.btn} onClick={goToHomeHandler}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Kids;
