import { Info } from "../../pages/login/components/Info";
import { Presentations } from "../../pages/login/components/Presentations";
import React from "react";
import "./infoSection.scss"

interface Props {
    paddingBottom: number
}

export const InfoSection = ({ paddingBottom }: Props) => {

    const style = {
        paddingBottom: paddingBottom
    }


    return (
      <div style={style} className="info-section row">
        <Info/>
        <Presentations/>
      </div>
    );
};
