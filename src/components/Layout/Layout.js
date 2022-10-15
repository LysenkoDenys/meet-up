import React from "react";
import classes from "./Layout.module.css";
import MainNavigatoin from "./MainNavigatoin";

const Layout = (props) => {
  return (
    <div>
      <MainNavigatoin />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
