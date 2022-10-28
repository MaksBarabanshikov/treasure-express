import React from "react";

import copyIcon from "../../../assets/img/icons/copy_icon.svg"
import linkIcon from "../../../assets/img/icons/link_icon.svg"

export const Info = () => {
    return (
        <div className="col-8">
            <div className="footer-section__info w-100 h-100">
                <h1>SmartGame Pro Info</h1>
                <div className="footer-section__contract d-flex justify-content-between">
                    <span>SmartGame Pro contract</span>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>0x982140...A3bf2e</span>
                        <button className="btn">
                            <img src={copyIcon} alt="copy"/>
                        </button>
                        <button className="btn">
                            <img src={linkIcon} alt="link"/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h4>Members Total</h4>
                        <p>42</p>
                        <span>+14</span>
                    </div>
                    <div className="col-4">
                        <h4>Transactions</h4>
                        <p>1080</p>
                        <span>+582</span>
                    </div>
                    <div className="col-4">
                        <h4>Turnover, BNB</h4>
                        <p>1708.2</p>
                        <span>+743.4</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
