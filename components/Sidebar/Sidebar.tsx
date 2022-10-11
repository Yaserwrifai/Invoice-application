import React from "react";
import Image from "next/image";
import Btn from "../login-btn"
const Sidebar = () => {
  return (
    <div className="sidebar">
              

      <div className="sidebar__container">
        <div className="sidebar__header">
          <div className="sidebar__logo">
          <h2>Project</h2>
          
          </div>
        
        </div>
        <h3>Code Academy</h3>
        <div className="sidebar__bottom">
          <Image src="/ava.png" alt="avatar" width="50" height="50" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
