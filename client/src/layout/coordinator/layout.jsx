import React from "react";
import SideBar from "../../components/ELEMENTS/Nav/SideBar";
import Navbar from "../../components/ELEMENTS/Nav/Navbar";

const CoordinatorLayout = ({ children }) => {
  return (
    <div className="relative w-screen h-screen">
      <SideBar />
      <Navbar />
      <div className="absolute top-[10vh] right-0 left-[20%]">{children}</div>
    </div>
  );
};

export default CoordinatorLayout;
