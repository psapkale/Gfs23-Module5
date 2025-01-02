import React from "react";
import Sidebar from "./Sidebar";
import WriteModal from "./WriteModal";
import PreviewModal from "./PreviewModal";

const Toolset = () => {
   return (
      <div className="flex">
         <Sidebar />
         <WriteModal />
         <PreviewModal />
      </div>
   );
};

export default Toolset;
