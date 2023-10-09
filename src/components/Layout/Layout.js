import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import BreedPage from "../BreedPage/BreedPage";

function Layout() {
  
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow rounded-xl m-2 p-4 bg-white w-full overflow-y-auto">
        <BreedPage />
      </div>
    </div>
  );
}

export default Layout;
