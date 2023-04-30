import React, { useReducer } from "react";

import classes from "./Main.module.scss";

import mainMenu from "../../dev/menus/mainMenu";

import FilterToggleButtons from "../../components/cross-menu-components/FilterToggleButtons";
import SectionWrapper from "../../components/main-menu-components/section-wrapper/SectionWrapper";
import SectionBorderWrapper from "../../components/main-menu-components/section-border-wrapper/SectionBorderWrapper";
import SaladsWrapper from "../../components/main-menu-components/salads-wrapper/SaladsWrapper";
import SteakBorderWrapper from "../../components/main-menu-components/steak-border-wrapper/SteakBorderWrapper";
import SidesWrapper from "../../components/main-menu-components/sides-wrapper/SidesWrapper";
import TransitionButton from "../../components/cross-menu-components/TransitionButton";

const initState = {
  dietaryFilter: "none",
  startersArr: mainMenu.startersArr,
  sharerArr: mainMenu.sharerArr,
  mainsArr: mainMenu.mainsArr,
  saladsArr: mainMenu.saladsArr,
  steaksArr: mainMenu.steaksArr,
  burgersArr: mainMenu.burgersArr,
  sidesArr: mainMenu.sidesArr,
  loadedFriesArr: mainMenu.loadedFriesArr,
  dessertsArr: mainMenu.dessertsArr,
};

const defaultState = {
  dietaryFilter: "none",
  startersArr: mainMenu.startersArr,
  sharerArr: mainMenu.sharerArr,
  mainsArr: mainMenu.mainsArr,
  saladsArr: mainMenu.saladsArr,
  steaksArr: mainMenu.steaksArr,
  burgersArr: mainMenu.burgersArr,
  sidesArr: mainMenu.sidesArr,
  loadedFriesArr: mainMenu.loadedFriesArr,
  dessertsArr: mainMenu.dessertsArr,
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
    case "updateSharerArr":
      return { ...state, sharerArr: value };
    case "updateMainsArr":
      return { ...state, mainsArr: value };
    case "updateSaladsArr":
      return { ...state, saladsArr: value };
    case "updateSteaksArr":
      return { ...state, steaksArr: value };
    case "updateBurgersArr":
      return { ...state, burgersArr: value };
    case "updateSidesArr":
      return { ...state, sidesArr: value };
    case "updateLoadedFriesArr":
      return { ...state, loadedFriesArr: value };
    case "updateDessertsArr":
      return { ...state, dessertsArr: value };
    default:
      throw new Error();
  }
};

const Main = (props) => {
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
      mainMenu.startersArr,
      dietaryValue
    );
    filterArrayCallback("updateSharerArr", mainMenu.sharerArr, dietaryValue);
    filterArrayCallback("updateMainsArr", mainMenu.mainsArr, dietaryValue);
    filterArrayCallback("updateSaladsArr", mainMenu.saladsArr, dietaryValue);
    filterArrayCallback("updateSteaksArr", mainMenu.steaksArr, dietaryValue);
    filterArrayCallback("updateBurgersArr", mainMenu.burgersArr, dietaryValue);
    filterArrayCallback("updateSidesArr", mainMenu.sidesArr, dietaryValue);
    filterArrayCallback(
      "updateLoadedFriesArr",
      mainMenu.loadedFriesArr,
      dietaryValue
    );
    filterArrayCallback("updateDessertsArr", state.dessertsArr, dietaryValue);
  };

  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["menu-wrapper"]}>
        <div className={classes["dinner-wrapper"]}>
          <h1 className={classes.heading}>Dinner</h1>
          <FilterToggleButtons
            toggleGlutenFree={toggleGlutenFreeHandler}
            toggleVegetarian={toggleVegetarianHandler}
            toggleVegan={toggleVeganHandler}
            dietaryFilter={state.dietaryFilter}
          />
        </div>
        <img className={classes.logo} src="images/view.jpg" alt="view" />

        <div className={classes["col-1"]}>
          {state.startersArr.length > 0 && (
            <SectionBorderWrapper
              heading={"Starters"}
              menuArray={state.startersArr}
              subMenuHeading={"Sharer"}
              subMenuArray={state.sharerArr}
            />
          )}

          {state.mainsArr.length > 0 && (
            <SectionWrapper heading={"Main Menu"} menuArray={state.mainsArr} />
          )}
        </div>

        <div className={classes["col-2"]}>
          {state.saladsArr.length > 0 && (
            <SaladsWrapper heading={"Salads"} menuArray={state.saladsArr} />
          )}
          {state.steaksArr.length > 0 && (
            <SteakBorderWrapper
              heading={"Steaks"}
              menuArray={state.steaksArr}
            />
          )}
          {state.burgersArr.length > 0 && (
            <SectionWrapper heading="Burgers" menuArray={state.burgersArr} />
          )}
          {state.sidesArr.length > 0 && (
            <SidesWrapper heading={"Sides"} menuArray={state.sidesArr} />
          )}
        </div>

        <div className={classes["col-3"]}>
          {state.loadedFriesArr.length > 0 && (
            <SidesWrapper
              heading={"Loaded Fries"}
              menuArray={state.loadedFriesArr}
            />
          )}
          {state.dessertsArr.length > 0 && (
            <SectionBorderWrapper
              heading={"Desserts"}
              menuArray={state.dessertsArr}
              subMenuHeading={"Ice Cream"}
            />
          )}
          <p className={classes.smallprint}>
            A full list of allergen information is available, please ask your
            server for information
          </p>
          <p className={classes.smallprint}>
            We cannot guarantee an allergen-free environment or products. Prices
            are in pounds Sterling and include VAT
          </p>
          <p className={classes.smallprint}>
            This menu may be available for limited periods and all dishes are
            subject to availability
          </p>
          <p className={classes.smallprint}>
            We strive to offer suitable alternatives where possible
          </p>
        </div>
        <button className={classes.btn} onClick={goToHomeHandler}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Main;
