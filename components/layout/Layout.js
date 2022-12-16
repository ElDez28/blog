import React from "react";
import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
