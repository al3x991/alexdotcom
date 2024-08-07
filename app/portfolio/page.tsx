// portfolio/main.js
"use client";

import Web from "@/components/Portfolio/Web";
import UIUX from "@/components/Portfolio/UIUX";
import { useState } from "react";

const PortfolioPage = () => {
  const [switchValue, setSwitchValue] = useState("Web");

  const handleComponentSwitch = (component) => {
    setSwitchValue(component);
  };

  return (
    <>
      {switchValue === "Web" && <Web />}
      {switchValue === "UIUX" && <UIUX />}
      <div className="item-center relative bottom-[30px] z-50 flex justify-center gap-12 text-center">
        <span
          className="cursor-pointer text-base font-bold hover:text-lime"
          onClick={() => handleComponentSwitch("Web")}
        >
          Web Development
        </span>
        {/* <span
          className="cursor-pointer text-base font-bold hover:text-lime"
          onClick={() => handleComponentSwitch("UIUX")}
        >
          UI/UX Design
        </span> */}
      </div>
    </>
  );
};

export default PortfolioPage;
