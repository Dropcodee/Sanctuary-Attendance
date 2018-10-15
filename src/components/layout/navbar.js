import React from "react";
import HomeNav from "./homeNav";
import AppNav from "./appNav";
export default () => {
  let Navigation;
  if (window.location.pathname === "/") {
    Navigation = <HomeNav />;
  } else {
    Navigation = <AppNav />;
  }
  return <div>{Navigation}</div>;
};
