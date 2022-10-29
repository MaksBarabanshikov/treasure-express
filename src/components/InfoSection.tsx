import { Info } from "../pages/login/components/Info";
import { Presentations } from "../pages/login/components/Presentations";
import React from "react";

export const InfoSection = () => {
    return (
      <div className="info-section row">
        <Info/>
        <Presentations/>
      </div>
    );
};
