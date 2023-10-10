import React, { useState } from "react";
import classes from "./App.module.scss";

import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import Kids from "./pages/kids/Kids";
import Drinks from "./pages/drinks/Drinks";

function App() {
  const [page, setPage] = useState("home");

  const changePageHandler = (page) => {
    setPage(page);
  };

  const goHomeHandler = () => {
    setPage("home");
  };
  return (
    <div className={classes.page}>
      {page === "home" && <Home onChangePage={changePageHandler} />}
      {page === "main" && <Main onChangePage={goHomeHandler} />}
      {page === "kids" && <Kids onChangePage={goHomeHandler} />}
      {page === "drinks" && <Drinks onChangePage={goHomeHandler} />}
    </div>
  );
}

export default App;

//// Kids font
//// font-family: 'Yellowtail', cursive;
