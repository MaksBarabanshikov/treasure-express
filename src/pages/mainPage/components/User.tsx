import React from "react";
import avatar from "../../../assets/img/avatar.svg";
import link from "../../../assets/img/link_icon.svg";

export const User = () => {
  return(
    <div className="user">
      <img src={ avatar } alt="avatar" />
      <div className="user__info">
        <h4>ID 36651822</h4>
        <div>
          <span>0x982140...A3bf2e</span>
          <img src={link} alt="link" />
        </div>
        <div>
              <span>
                Invited 05.04.2022 by
              </span>
          <span className="id">
                ID 31224822
              </span>
        </div>
      </div>
    </div>
  )
}
