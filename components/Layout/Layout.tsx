import React, { Fragment } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Btn from "../login-btn"


const Layout = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }) => {
  return (
    <Fragment>
      <Btn/>
      <Sidebar />
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
