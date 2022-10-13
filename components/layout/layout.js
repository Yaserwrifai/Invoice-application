import Sidebar from "../Sidebar/Sidebar";
import Btn from "../login-btn";
import { Fragment } from 'react';
import MainNavigation from './main-navigation';


function Layout(props) {
  return (
    <Fragment>
       <MainNavigation session={props.session} />
       {/* <Btn/> */}
      <Sidebar />
    
      <main>{props.children}</main>

    </Fragment>
  );
};

export default Layout;
