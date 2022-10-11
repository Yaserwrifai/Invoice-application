import React, { Fragment } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Btn from "../login-btn"

const Layout = (props) => {
  return (
    <Fragment>
      
      <Btn/>
      <Sidebar />
   
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
