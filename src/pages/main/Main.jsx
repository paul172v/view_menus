import React, { useReducer, useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";

import classes from "./Main.module.scss";

import FilterToggleButtons from "../../components/cross-menu-components/FilterToggleButtons";
import SectionWrapper from "../../components/main-menu-components/section-wrapper/SectionWrapper";
import SectionBorderWrapper from "../../components/main-menu-components/section-border-wrapper/SectionBorderWrapper";
import SaladsWrapper from "../../components/main-menu-components/salads-wrapper/SaladsWrapper";
import SteakBorderWrapper from "../../components/main-menu-components/steak-border-wrapper/SteakBorderWrapper";
import SidesWrapper from "../../components/main-menu-components/sides-wrapper/SidesWrapper";

const initState = {
  dietaryFilter: "none",
  startersArr: null,
  sharersArr: null,
  mainsArr: null,
  saladsArr: null,
  steaksArr: null,
  steakSidesArr: null,
  burgersArr: null,
  sidesArr: null,
  loadedFriesArr: null,
  dessertsArr: null,
  defaultState: {},
};

const reducer = (state, { type, value }) => {
  switch (type) {
    ///// toggle the dietary filters
    case "toggleGlutenFree":
      if (state.dietaryFilter === "gfo") {
        return { ...state, dietaryFilter: "none" };
      } else {
        return { ...state, dietaryFilter: "gfo" };
      }

    case "toggleVegetarian":
      if (state.dietaryFilter === "v") {
        return { ...state, dietaryFilter: "none" };
      } else {
        return { ...state, dietaryFilter: "v" };
      }

    case "toggleVegan":
      if (state.dietaryFilter === "vgo") {
        return { ...state, dietaryFilter: "none" };
      } else {
        return { ...state, dietaryFilter: "vgo" };
      }

    ///// Setup the default state
    case "setDefaultMenusState":
      return { ...state, defaultState: value };

    ///// Assign values to the main state
    case "updateStartersArr":
      return { ...state, startersArr: value };
    case "updateSharersArr":
      return { ...state, sharersArr: value };
    case "updateMainsArr":
      return { ...state, mainsArr: value };
    case "updateSaladsArr":
      return { ...state, saladsArr: value };
    case "updateSteaksArr":
      return { ...state, steaksArr: value };
    case "updateSteakSidesArr":
      return { ...state, steakSidesArr: value };
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

  const [menusLoaded, toggleMenusLoaded] = useState(false);

  //////////////////////////////////////
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v1/main-menu/get-every-array", {
      Method: "GET",
      Headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((dataObj) => {
        //handle data

        dispatch({
          type: "updateStartersArr",
          value: dataObj.payload.data.startersArr,
        });
        dispatch({
          type: "updateSharersArr",
          value: dataObj.payload.data.sharersArr,
        });
        dispatch({
          type: "updateMainsArr",
          value: dataObj.payload.data.mainsArr,
        });
        dispatch({
          type: "updateSaladsArr",
          value: dataObj.payload.data.saladsArr,
        });
        dispatch({
          type: "updateSteaksArr",
          value: dataObj.payload.data.steaksArr,
        });
        dispatch({
          type: "updateBurgersArr",
          value: dataObj.payload.data.burgersArr,
        });
        dispatch({
          type: "updateSteakSidesArr",
          value: dataObj.payload.data.steakSidesArr,
        });
        dispatch({
          type: "updateSidesArr",
          value: dataObj.payload.data.sidesArr,
        });
        dispatch({
          type: "updateLoadedFriesArr",
          value: dataObj.payload.data.loadedFriesArr,
        });
        dispatch({
          type: "updateDessertsArr",
          value: dataObj.payload.data.dessertsArr,
        });

        dispatch({
          type: "setDefaultMenusState",
          value: {
            dietaryFilter: "none",
            startersArr: dataObj.payload.data.startersArr,
            sharersArr: dataObj.payload.data.sharersArr,
            mainsArr: dataObj.payload.data.mainsArr,
            saladsArr: dataObj.payload.data.saladsArr,
            steaksArr: dataObj.payload.data.steaksArr,
            steakSidesArr: dataObj.payload.data.steakSidesArr,
            burgersArr: dataObj.payload.data.burgersArr,
            sidesArr: dataObj.payload.data.sidesArr,
            loadedFriesArr: dataObj.payload.data.loadedFriesArr,
            dessertsArr: dataObj.payload.data.dessertsArr,
          },
        });

        toggleMenusLoaded(true);
      })
      .catch((error) => {
        toggleMenusLoaded("error");
      });
  }, []);
  ///////////////////////////////////////////////////////

  const goToHomeHandler = () => {
    props.onChangePage("home");
  };

  const toggleGlutenFreeHandler = () => {
    dispatch({ type: "toggleGlutenFree" });
    filterAllArraysHandler("gfo");
  };

  const toggleVegetarianHandler = () => {
    dispatch({ type: "toggleVegetarian" });
  };

  const toggleVeganHandler = () => {
    dispatch({ type: "toggleVegan" });
  };

  const filterAllArraysHandler = (type, dietaryArgument) => {
    const keyNamesArr = Object.keys(state);
    const index = keyNamesArr.indexOf("dietaryFilter");
    keyNamesArr.splice(index, 1);
    const index2 = keyNamesArr.indexOf("defaultState");
    keyNamesArr.splice(index2, 1);

    const individualMenuArr = [];

    for (let key of keyNamesArr) {
      if (key !== "defaultState" && key !== "dietaryFilter") {
      }
      individualMenuArr.push(state[key]);
    }

    const placeholderObj = {};
    for (let i = 0; i < keyNamesArr.length; i++) {
      placeholderObj[keyNamesArr[i]] = individualMenuArr[i];
    }
    console.log(placeholderObj);
  };

  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["menu-wrapper"]}>
        {menusLoaded === true && (
          <React.Fragment>
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
                  subMenuArray={state.sharersArr}
                />
              )}

              {state.mainsArr.length > 0 && (
                <SectionWrapper
                  heading={"Main Menu"}
                  menuArray={state.mainsArr}
                />
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
                  steakSides={state.steakSidesArr}
                />
              )}
              {state.burgersArr.length > 0 && (
                <SectionWrapper
                  heading="Burgers"
                  menuArray={state.burgersArr}
                />
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
                A full list of allergen information is available, please ask
                your server for information
              </p>
              <p className={classes.smallprint}>
                We cannot guarantee an allergen-free environment or products.
                Prices are in pounds Sterling and include VAT
              </p>
              <p className={classes.smallprint}>
                This menu may be available for limited periods and all dishes
                are subject to availability
              </p>
              <p className={classes.smallprint}>
                We strive to offer suitable alternatives where possible
              </p>
            </div>
            <button className={classes.btn} onClick={goToHomeHandler}>
              Return to Home
            </button>
          </React.Fragment>
        )}

        {menusLoaded === false && (
          <div className={classes["spinner-wrapper"]}>
            <MoonLoader color="#e08220" />
          </div>
        )}

        {menusLoaded === "error" && (
          <div className={classes["spinner-wrapper"]}>
            <p className={classes["error-message"]}>
              Menus could not be loaded. Please try again later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
