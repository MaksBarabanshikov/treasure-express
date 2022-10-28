import { BgSection } from "./components/BgSection";
import { LevelPrice } from "../login/components/LevelPrice";
import { UserSection } from "./components/UserSection";
import { BgLast } from "./components/BgLast";
import { Info } from "../login/components/Info";
import { Presentations } from "../login/components/Presentations";
import React from "react";

export const MainPage = () => {
  return (
    <>
      <BgSection />
      <BgLast />
      <UserSection />
      <div className="container">
        <LevelPrice col={12}/>
        <div className="row">
          <Info/>
          <Presentations/>
        </div>
      </div>

    </>
)
};
