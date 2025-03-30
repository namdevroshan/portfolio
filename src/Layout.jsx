import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20"> {/* Push content below the fixed navbar */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
